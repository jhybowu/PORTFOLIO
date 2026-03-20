import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Gbenga Jibowu | Cybersecurity Professional – SOC Analyst & Security Engineer",
  description: "Portfolio of Gbenga Jibowu, a Cybersecurity Professional specializing in SOC analysis, threat detection, SIEM, cloud security (AWS/GCP), network security, and incident response. Open to opportunities at Google, Microsoft, Amazon, Meta, Apple, CrowdStrike, Palo Alto Networks, and other leading tech companies.",
  generator: "v0.dev",
  keywords: [
    "Cybersecurity", "SOC Analyst", "Security Engineer", "Threat Detection", "Incident Response",
    "SIEM", "Elastic SIEM", "Wazuh", "ELK Stack", "Splunk",
    "Cloud Security", "AWS Security", "Google Cloud Security", "GCP", "IAM",
    "Network Security", "Wireshark", "Packet Analysis", "VPC Flow Logs", "CloudTrail",
    "Penetration Testing", "Vulnerability Assessment", "PKI", "TLS", "mTLS", "OpenSSL",
    "AlienVault OTX", "Threat Intelligence", "IDS", "IPS", "Firewall", "ACL",
    "CNSP", "CCEP", "Certified Network Security Practitioner",
    "Google Cybersecurity", "Microsoft Security", "Amazon AWS Security", "Meta Security",
    "CrowdStrike", "Palo Alto Networks", "SentinelOne", "IBM Security",
    "Security Operations Center", "Blue Team", "Red Team", "Threat Hunting",
    "Digital Forensics", "Windows Event Logs", "Linux Security", "Kali Linux",
    "Cisco", "Packet Tracer", "Routing", "Switching", "WAN",
    "Java", "Android Development", "Python",
    "Gbenga Jibowu", "Saheed Jibowu", "Jibowu", "Lagos Nigeria", "Nigeria Cybersecurity",
    "Entry Level SOC Analyst", "Junior Security Engineer", "Cybersecurity Portfolio",
    "Hire Cybersecurity", "Security Analyst Jobs", "Remote Cybersecurity"
  ],
  authors: [{ name: "Gbenga Jibowu" }],
  creator: "Gbenga Jibowu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Gbenga Jibowu | Cybersecurity Professional – SOC Analyst & Security Engineer",
    description: "Portfolio of Gbenga Jibowu – SOC Analyst specializing in SIEM, cloud security (AWS/GCP), threat detection, network security, and incident response."
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
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
