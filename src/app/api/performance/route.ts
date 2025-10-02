import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

/**
 * ✅ GET /api/performance
 * - Fetch exam results (with filters, pagination, search)
 * - If summary=true, return current term summary for a student
 */
export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const studentId = searchParams.get("studentid");
    const subjectId = searchParams.get("subjectid");
    const examId = searchParams.get("examid");
    const term = searchParams.get("term");
    const year = parseInt(searchParams.get("year") || new Date().getFullYear());
    const summary = searchParams.get("summary") === "true";

    // Summary mode
    if (summary) {
      if (!studentId) {
        return NextResponse.json(
          { message: "studentId is required for summary" },
          { status: 400 }
        );
      }

      const results = await prisma.examResult.findMany({
        where: {
          studentId,
          term,
          year,
          exam: { schoolId: user.schoolId },
        },
        include: { subject: true },
      });

      if (!results.length) return NextResponse.json({ summary: null });

      const average =
        results.reduce((acc, r) => acc + r.score, 0) / results.length;
      const best = results.reduce((prev, curr) =>
        curr.score > prev.score ? curr : prev
      );
      const weakest = results.reduce((prev, curr) =>
        curr.score < prev.score ? curr : prev
      );

      return NextResponse.json({
        summary: {
          average,
          bestSubject: best.subject.name,
          weakestSubject: weakest.subject.name,
          grade:
            average >= 80
              ? "A"
              : average >= 70
              ? "B"
              : average >= 60
              ? "C"
              : "D",
          totalSubjects: results.length,
        },
      });
    }

    // Full results mode
    const skip = (page - 1) * limit;
    const whereClause: any = {
      exam: { schoolId: user.schoolId },
    };

    if (studentId) whereClause.studentId = studentId;
    if (subjectId) whereClause.subjectId = subjectId;
    if (examId) whereClause.examId = examId;
    if (term) whereClause.exam = { ...whereClause.exam, term };
    if (year) whereClause.exam = { ...whereClause.exam, year };

    if (search) {
      whereClause.OR = [
        { student: { name: { contains: search, mode: "insensitive" } } },
        { subject: { name: { contains: search, mode: "insensitive" } } },
        { grade: { contains: search, mode: "insensitive" } },
      ];
    }

    const total = await prisma.examResult.count({ where: whereClause });

    const results = await prisma.examResult.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { student: true, subject: true, exam: true },
    });

    return NextResponse.json({
      results,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    console.error("Error fetching exam results:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

/**
 * ✅ POST /api/performance
 * Add new exam result entry
 */
export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const { studentId, subjectId, examId, score, grade, remarks } =
      await req.json();

    if (!studentId || !subjectId || !examId || score === undefined) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await prisma.examResult.create({
      data: {
        studentId,
        subjectId,
        examId,
        score: parseFloat(score),
        grade: grade || calculateGrade(score),
        remarks: remarks || "",
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.error("Error creating exam result:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

/**
 * ✅ PATCH /api/performance
 * Update an existing exam result
 */
export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    const { id, score, grade, remarks } = await req.json();

    if (!id)
      return NextResponse.json({ message: "Id required" }, { status: 400 });

    const updated = await prisma.examResult.update({
      where: { id },
      data: {
        score: score !== undefined ? parseFloat(score) : undefined,
        grade: grade || (score ? calculateGrade(score) : undefined),
        remarks,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("Error updating exam result:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

/**
 * ✅ DELETE /api/performance
 * Delete an exam result entry
 */
export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();

    if (!id)
      return NextResponse.json({ message: "Id required" }, { status: 400 });

    await prisma.examResult.delete({ where: { id } });

    return NextResponse.json(
      { message: "Exam result deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error deleting exam result:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

/**
 * 📘 Utility: Grade calculator
 */
function calculateGrade(score: number) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}
