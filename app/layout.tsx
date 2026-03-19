import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Saheed Jibowu| Cybersecurity Professional",
  description: "Cybersecurity portfolio of Saheed Jibowu- SOC Analyst",
  generator: "v0.dev",
  keywords: ["Cybersecurity", "SOC Analyst", "Security Engineer", "Threat Expert", "Portfolio"],
  authors: [{ name: "Saheed Jibowu" }],
  creator: "Saheed Jibowu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Saheed Jibowu| Cybersecurity Professional",
    description: "Cybersecurity portfolio of Saheed Jibowu- SOC Analyst"
  }
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
