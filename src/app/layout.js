import './globals.css';

export const metadata = {
  title: 'MediaFinder',
  description: 'A premium media discovery workspace for modern creators.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
