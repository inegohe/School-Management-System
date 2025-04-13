import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <main className="h-screen w-screen overflow-hidden flex justify-center items-center">
          <div className="absolute top-0 left-0 h-screen w-screen -z-50">
            <Image width={740} height={100} alt="background" className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/book-with-green-board-background_1150-3837.jpg?semt=ais_hybrid&w=740"/>
          </div>
          <div className="w-full bg-[#00000088] h-full p-2 md:w-[85%] md:h-[90%] overflow-hidden md:rounded-lg md:p-6 flex justify-center items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
