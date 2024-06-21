import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/navbar";
import LoginModal from "./components/modals/login_modal";
import SignUpModal from "./components/modals/sign_up_modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Django Airbnb",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="pt-36 pb-16 bg-white">
          {children}
        </div>
        <LoginModal/>
        <SignUpModal/> 
      </body>
    </html>
  );
}
