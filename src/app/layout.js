import "./globals.css";
import SmoothScroll from "./Smooth/SmoothScroll";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
