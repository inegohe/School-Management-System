import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="h-screen flex overflow-hidden">
          <div className="w-[16%] md:w-[20%] lg:w-[16%] xl:w-[14%] group p-2 bg-white cursor-pointer relative">
            <Menu />
          </div>
          <div className="w-[84%] md:w-[80%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col h-full">
            <main className="flex flex-col overflow-scroll gap-4 h-full">
              <Header />
              {children}
            </main>
          </div>
        </main>
      </body>
    </html>
  );
}
