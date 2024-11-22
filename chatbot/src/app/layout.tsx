import type { Metadata } from "next";
import styles from "./globals.module.scss"



export const metadata: Metadata = {
  title: "chatbot",
  description: "Your assistnant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.layout }>
        {children}
      </body>
    </html>
  );
}
