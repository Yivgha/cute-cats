import './globals.css'

export const metadata = {
  title: 'Cute cats API',
  description: 'Look for best cat ever',
  icons: {
    icon: './icon.ico',
  },
}

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body >
        {props.children}
      </body>
    </html>
  )
}
