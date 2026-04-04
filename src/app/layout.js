import './globals.css';

export const metadata = {
  title: 'Media Finder',
  description: 'A premium media discovery workspace for modern creators.',
   icons: {
    icon: '/favicon.ico',
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
