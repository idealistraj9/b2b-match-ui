"use client";
import React from "react";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Document</title>
        </head>
        <body className="bg-gray-50 dark:bg-gray-900">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex bg-gray-50 dark:bg-gray-900 justify-center items-center self-center">
              <main className="flex p-4 bg-gray-50 dark:bg-gray-900 justify-center items-center self-center">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
