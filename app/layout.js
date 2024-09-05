import './globals.css';

export const metadata = {
  title: 'Nike',
  description: 'Découvrez les dernières nouveautés Nike',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
