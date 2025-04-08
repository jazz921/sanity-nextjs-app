import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Layer Caker</title>
      <body>{children}</body>
    </html>
  );
}
