import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MRR Runway Calculator — Know Exactly When You Run Out',
  description: 'Input your MRR, burn rate, and growth rate to see your exact startup runway with multiple scenarios. Built for SaaS founders and startup CFOs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="292e3419-ab28-4ac8-bc0b-669d1a6cb152"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
