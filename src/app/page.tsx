import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useRouter } from "next/router"

export default function DefLandingPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login"); // 👈 immediately redirect to login
  }, [router]);

  return null; // Don't render anything on this page
}

export function LandingPage() {
  
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Admin Dashboard",
      description:
        "Manage staff, parents, and students with full editing capabilities and comprehensive oversight.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Personalized Schedules",
      description:
        "Students and teachers receive real-time schedule calendars based on the school timetable.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Attendance Analytics",
      description:
        "Teachers can take attendance and access real-time analytics on attendance rates.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Parent Portal",
      description:
        "Parents can conveniently view the schedules of all their children in one place.",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "School-Wide Communication",
      description:
        "Share important announcements and events school-wide to keep everyone informed.",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "PWA Support",
      description:
        "Install the app on any device for quick and easy access anywhere, anytime.",
    },
  ];

  const technologies = [
    {
      name: "Next.js",
      description: "React framework for building performant web applications",
    },
    {
      name: "TypeScript",
      description: "Superset of JavaScript for enhanced type safety",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
    },
    { name: "Prisma", description: "Modern database toolkit & ORM" },
    { name: "JWT", description: "For Authentication" },
    {
      name: "Nodemailer",
      description: "For email services like sending confirmation mails",
    },
    {
      name: "Framer Motion",
      description: "Used for animations and transitions",
    },
    {
      name: "React Hook Form",
      description: "Used for forms and handling them easily",
    },
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
      {/* Header */}
      <header className="border-b border-gray-900 bg-black backdrop-blur supports-[backdrop-filter]:bg-black fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-white" />
            <span className="text-xl font-bold">School Control</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#tech"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Technology
            </Link>
            <Link
              href="#installation"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Installation
            </Link>
            <Button className="bg-secondary text-primary">
              <Link href="/login">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 mt-10">
        <div className="container mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-4 bg-gray-900/50 text-gray-300 border-gray-800"
          >
            🚀 Revolutionize Your School Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-black clip-text text-transparent">
            School Control
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A comprehensive school management application built with Next.js,
            Prisma, and Tailwind CSS, designed to connect admins, teachers,
            parents, and students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/U22099/School-Management-System">
              <Button size="lg" className="bg-secondary text-primary">
                <Github className="mr-2 h-5 w-5 stroke-black" />
                View on GitHub
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-white hover:bg-gray-800"
              >
                Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-secondary-light mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See It In Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the power of our comprehensive dashboard with real-time
              analytics, intuitive navigation, and beautiful dark theme design.
            </p>
          </div>
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
            <div className="relative bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20%28173%29%20-%20Copy-ENsqvLtMcx0k23fOt5uCloe9A2oEa5.png"
                alt="School Control Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">✨ Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage your school efficiently, all in one
              comprehensive platform.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors"
              >
                <CardHeader>
                  <div className="text-blue-400 mb-2">{feature.icon}</div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              💻 Built With Modern Technology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powered by the latest and most reliable technologies for optimal
              performance and scalability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/30 border border-gray-800"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">🛠️ Quick Installation</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get up and running in minutes with our simple installation
              process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Clone the repository
                    </h3>
                    <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block text-wrap">
                      git clone
                      https://github.com/U22099/School-Management-System.git
                    </code>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Install dependencies
                    </h3>
                    <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      npm install
                    </code>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Set up environment variables
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Configure your .env file with database and email settings
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Start the development server
                    </h3>
                    <code className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      npm run dev
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your School Management?
            </h2>
            <p className="text-gray-400 mb-8">
              Join schools worldwide who are already using School Control to
              streamline their operations and improve communication between all
              stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-secondary text-primary">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 stroke-black" />
                </Button>
              </Link>
              <Link href="https://github.com/U22099/School-Management-System">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GraduationCap className="h-6 w-6" />
              <span className="font-semibold">School Control</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://github.com/U22099"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/dan_22099"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LucideTwitter className="h-5 w-5" />
              </Link>
              <span className="text-gray-400 text-sm">
                Built by{" "}
                <Link
                  href="https://github.com/U22099"
                  className="text-gray-400 hover:text-gray-300"
                >
                  Daniel (U22099)
                </Link>
              </span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              Licensed under the Apache License 2.0. Open source and free to
              use.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
