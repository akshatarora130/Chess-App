import "./globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./provider.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chess App",
  description: "Multiplayer chess app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
