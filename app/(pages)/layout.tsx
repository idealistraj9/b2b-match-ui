// RootLayout.js
"use client";
import Sidebar from "@/components/sideBar";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="overflow-hidden ">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex">

            <Sidebar />
            <div className="flex-1">{children}</div>
            </div>
            
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
