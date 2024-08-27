import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./bagshiih/header";
import { Footer } from "./bagshiih/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
