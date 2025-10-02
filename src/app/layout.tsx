import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ICONS = [
  { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
  { url: "/android-chrome-maskable-192x192.png", type: "image/png", sizes: "192x192" },
  { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
  { url: "/android-chrome-maskable-512x512.png", type: "image/png", sizes: "512x512" },
  { url: "/apple-touch-icon.png", type: "image/png" },
  { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
  { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  { url: "/favicon.ico", type: "image/x-icon" },
];

const APP_NAME = "Kankoko";
const APP_DEFAULT_TITLE = "Kankoko: School Management System";
const APP_TITLE_TEMPLATE = "%s - Kankoko";
const APP_DESCRIPTION =
  "Kankoko is a comprehensive school management system designed for primary and secondary schools. " +
  "Admins can manage staff, students, and parents with ease. Teachers can take attendance, access student performance analytics, and manage schedules. " +
  "Parents can stay updated on their children's schedules and school announcements. Enhance communication, streamline operations, and build a connected school community with Kankoko.";

export const metadata: Metadata = {
  themeColor: "#0D47A1", // custom primary blue for the app
  applicationName: APP_NAME,
  icons: ICONS,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
