import "./globals.css";
import { MainCanvas } from "./components/MainCanvas";
import Overlay from "./components/Overlay";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Overlay />
        <MainCanvas />
      </body>
    </html>
  );
}
