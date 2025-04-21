import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>ETQ</title>
      <body>{children}</body>
    </html>
  );
}
