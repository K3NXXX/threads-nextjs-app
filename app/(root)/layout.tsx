import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/shared/Header";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import Footer from "@/components/shared/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Threads',
  description: "A Next.js 14 Meta Threads Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body className={inter.className}>
            <Header/>
            <main>
              <LeftSideBar/>
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
              <RightSideBar/>
            </main>
            <Footer/>
          </body>
      </html>
    </ClerkProvider> 
  );
}
