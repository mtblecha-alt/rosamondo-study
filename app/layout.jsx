import './globals.css'

export const metadata = {
  title: 'Rosamondo — Der Marktplatz für zirkuläre Materialien',
  description: 'Materialien weitergeben, weiterverwenden und Kreisläufe schließen — wo überschüssige Materialien ein neues Leben bekommen.',
  keywords: ['zirkuläre Materialien', 'B2B Marktplatz', 'Kreislaufwirtschaft', 'Nachhaltigkeit'],
}

const base = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'MKLatin';
            src: url('${base}/fonts/MKLatinLight.ttf') format('truetype');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'HelveticaNeue';
            src: local('Helvetica Neue'), local('HelveticaNeue'), url('${base}/fonts/HelveticaNeue.ttc') format('truetype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
