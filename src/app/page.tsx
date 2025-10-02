"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Calendar,
  BarChart3,
  MessageSquare,
  Smartphone,
  Shield,
  GraduationCap,
  Github,
  Star,
  ArrowRight,
  CheckCircle,
  LucideTwitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  // If you still want to auto-redirect to login:
  useEffect(() => {
    router.push("/login");
  }, [router]);

  const features = [
    { icon: <Shield className="h-8 w-8" />, title: "Admin Dashboard", description: "Manage staff, parents, and students with full editing capabilities and comprehensive oversight." },
    { icon: <Calendar className="h-8 w-8" />, title: "Personalized Schedules", description: "Students and teachers receive real-time schedule calendars based on the school timetable." },
    { icon: <BarChart3 className="h-8 w-8" />, title: "Attendance Analytics", description: "Teachers can take attendance and access real-time analytics on attendance rates." },
    { icon: <Users className="h-8 w-8" />, title: "Parent Portal", description: "Parents can conveniently view the schedules of all their children in one place." },
    { icon: <MessageSquare className="h-8 w-8" />, title: "School-Wide Communication", description: "Share important announcements and events school-wide to keep everyone informed." },
    { icon: <Smartphone className="h-8 w-8" />, title: "PWA Support", description: "Install the app on any device for quick and easy access anywhere, anytime." },
  ];

  const technologies = [
    { name: "Next.js", description: "React framework for building performant web applications" },
    { name: "TypeScript", description: "Superset of JavaScript for enhanced type safety" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development" },
    { name: "Prisma", description: "Modern database toolkit & ORM" },
    { name: "JWT", description: "For Authentication" },
    { name: "Nodemailer", description: "For email services like sending confirmation mails" },
    { name: "Framer Motion", description: "Used for animations and transitions" },
    { name: "React Hook Form", description: "Used for forms and handling them easily" },
    { name: "Zod", description: "For schema validation" },
    { name: "Zustand", description: "For state management" },
  ];

  const stats = [
    { number: "100%", label: "Open Source" },
    { number: "PWA", label: "Ready" },
    { number: "4", label: "User Roles" },
    { number: "10+", label: "Features" },
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Header, Hero, Stats, Features, Tech, Installation, CTA, Footer */}
      {/* Use your existing JSX code here, just remove the separate LandingPage export */}
    </div>
  );
}
