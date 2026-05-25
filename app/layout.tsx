import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "InterviewAI",
  description: "AI Powered Mock Interview Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white">
          <div className="glow-blue"></div>
          <div className="glow-purple"></div>

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}