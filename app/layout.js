"use client"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "./globals.css"

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body >
      {children}
      <ProgressBar
          height="10px"
          color="#808000"
          options={{ showSpinner: false }}
          shallowRouting
      />
      </body>
      </html>
  )
}


// import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
//
// import { Inter } from 'next/font/google'
// import './globals.css'
// import React from "react";
//
//
// const inter = Inter({ subsets: ['latin'] })
//
// export const metadata = {
//   title: '1st Web Application',
//   description: 'Generated by create next app',
// }
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//     <body className={inter.className}>{children}</body>
//     </html>
//   )
// }
