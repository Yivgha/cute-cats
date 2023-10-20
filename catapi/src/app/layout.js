// "use client"
import "./globals.css"
import { Jost } from "next/font/google"
import { Provider } from 'react-redux';
import Store from '@/reducers/store';

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
    <Provider store={Store}>
    <html lang="en" className={jost.variable}>
      <body>
        {props.children}
      </body>
      </html>
      </Provider>
  )
}