import type { Metadata } from "next";
import UserLogin from "@/components/UserLogin";
import './globals.css';
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <UserLogin />
          {children}
        </Providers>
      </body>
    </html>
  );
}
