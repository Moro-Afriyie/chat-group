"use client";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="w-full h-screen bg-chat-bg flex">
          <Sidebar />
          <div className="w-full flex-grow">
            <Header channelName="Front-end developers" />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
