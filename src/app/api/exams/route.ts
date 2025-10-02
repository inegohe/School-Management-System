// /api/exams.ts
import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

/**
 * GET /api/exams
 * - Fetch all exams for the user's school
 * - Optional: ?search=term to filter by name or term
 */
export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const exams = await prisma.exam.findMany({
      where: {
        schoolId: user.schoolId,
        OR: search
          ? [
              { name: { contains: search, mode: "insensitive" } },
              { term: { contains: search, mode: "insensitive" } },
            ]
          : undefined,
      },
      orderBy: { startDate: "desc" },
    });

    return NextResponse.json(exams);
  } catch (err) {
    console.error("Error fetching exams:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

/**
 * POST /api/exams
 * - Add a new exam for the school
 */
export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const { name, term, year, startDate, endDate } = await req.json();

    if (!name || !term || !year || !startDate || !endDate) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const exam = await prisma.exam.create({
      data: {
        name,
        term,
        year,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        schoolId: user.schoolId,
      },
    });

    return NextResponse.json(exam, { status: 201 });
  } catch (err) {
    console.error("Error creating exam:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

/**
 * PATCH /api/exams
 * - Update an existing exam
 * - Requires exam ID
 */
export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    const { id, name, term, year, startDate, endDate } = await req.json();

    if (!id) return NextResponse.json({ message: "Exam ID is required" }, { status: 400 });

    const updated = await prisma.exam.update({
      where: { id },
      data: {
        name,
        term,
        year,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("Error updating exam:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

/**
 * DELETE /api/exams
 * - Delete an exam by ID
 */
export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();

    if (!id) return NextResponse.json({ message: "Exam ID is required" }, { status: 400 });

    await prisma.exam.delete({ where: { id } });

    return NextResponse.json({ message: "Exam deleted" }, { status: 200 });
  } catch (err) {
    console.error("Error deleting exam:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});
