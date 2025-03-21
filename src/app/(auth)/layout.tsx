import type { Metadata } from "next";
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
