import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300","400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}