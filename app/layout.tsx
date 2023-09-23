import Provider from "./Provider";
import "./globals.css";
import type { Metadata } from "next";
import Header from "@/app/components/Header";

export const metadata: Metadata = {
  title: "Dev-Notes",
  description: "made with next.js and mantineUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className="relative bg-main min-h-screen">
          <Header />
          <main className="mx-auto py-auto text-sub">{children}</main>
          <footer className="absolute bottom-0 flex items-center justify-center w-full md:h-16 sm:h-10 bg-fourth">
            <p className="text-xs text-center text-main/70">
              Copyright © 2023 Dev-Notes | All rights reserved
            </p>
          </footer>
        </body>
      </Provider>
    </html>
  );
}
