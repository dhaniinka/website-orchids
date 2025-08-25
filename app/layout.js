// app/layout.js
import '../styles/katalog.css';
import '../styles/navbar.css';
import '../styles/blog.css';
import '../styles/home.css';
import '../styles/auth.css';
import '../styles/keranjang.css';

export const metadata = {
  title: "Orchids Website",
  description: "Website project pakai Next.js + CSS global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
