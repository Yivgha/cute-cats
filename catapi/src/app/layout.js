import './globals.css'

export const metadata = {
  title: 'Cute cats API',
  description: 'Look for best cat ever',
  icons: {
    icon: './icon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
