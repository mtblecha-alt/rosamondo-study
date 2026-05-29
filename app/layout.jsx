import './globals.css'

export const metadata = {
  title: 'Rosamondo — Der Marktplatz für zirkuläre Materialien',
  description: 'Materialien weitergeben, weiterverwenden und Kreisläufe schließen — wo überschüssige Materialien ein neues Leben bekommen.',
  keywords: ['zirkuläre Materialien', 'B2B Marktplatz', 'Kreislaufwirtschaft', 'Nachhaltigkeit'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
