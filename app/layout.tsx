import type { Metadata } from "next";
import { Lora, Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora-custom",
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400"],
  variable: '--font-google-sans',
})

export const metadata: Metadata = {
  title: "Focus app - Dante",
  description: "Foque. Leia. Estude.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt" className={`h-full antialiased`}>
      <body
        className={`${lora.className} 
        ${googleSansFlex.className}
        min-h-full 
        flex flex-col 
        bg-background 
        text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
