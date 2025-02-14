import "./globals.css";
import { MainCanvas } from "./components/MainCanvas";
import Carousel from "./components/Carousel";
import Overlay from "./components/Overlay";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // style={{ width: "500vw" }}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Overlay />
        <Carousel />
        <MainCanvas />
      </body>
    </html>
  );
}
