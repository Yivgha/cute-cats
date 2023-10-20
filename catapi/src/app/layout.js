"use client"

import { Provider } from "react-redux";
import Store from "../reducers/store";

import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  weight: ["400", "500"],
});

export default function RootLayout(props) {
  return (
    <Provider store={Store}>
      <html lang="en" className={jost.variable}>
        <head>
          <title>Cute cats API</title>
          <link
  rel="icon"
  href="./icon.ico"
  type="image/<generated>"
  sizes="<generated>"
          />
          <meta
  name="description"
  content="Look for best cat ever"
/>
        </head>
        <body>{props.children}</body>
      </html>
</Provider>
  );
}
