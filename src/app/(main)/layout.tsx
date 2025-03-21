import type { Metadata } from "next";
import localFont from 'next/font/local'
import UserLogin from "@/components/UserLogin";
import Providers from "@/components/Providers";
import { getSession } from "@/api/auth";
import { Box, VStack } from "styled-system/jsx";
import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode
}

const jfOpenHuninn = localFont({ src: './jf-openhuninn-2.1.ttf' })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props

  const session = await getSession()

  return (
    <html lang="en" className={jfOpenHuninn.className}>
      <body>
        <Providers session={session}>
          <VStack minW="100vw" minH="100vh">
            <UserLogin />
            <Box flex="1 0 0">
              {children}
            </Box>
          </VStack>
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout
