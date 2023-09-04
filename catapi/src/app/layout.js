import "./globals.css"
import {Jost} from "next/font/google"

export const metadata = {
  title: 'Cute cats API',
  description: 'Look for best cat ever',
  icons: {
    icon: './icon.ico',
  },
}
const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
  weight: ['400', '500']
});

export default function RootLayout(props) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        {props.children}
      </body>
    </html>
  )
}