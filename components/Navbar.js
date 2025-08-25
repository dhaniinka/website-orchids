"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import '../styles/navbar.css'; // CSS khusus Navbar

export default function Navbar({ activePage }) {
  return (
    <header className="navbar">
      <div className="logo">
        <Image src="/Logo.png" alt="Orchids Logo" width={120} height={60} />
      </div>

      <div className="nav-right">
        <nav>
          <ul className="nav-links">
            <li className={activePage === "home" ? "active" : ""}>
              <Link href="/">HOME</Link>
            </li>
            <li className={activePage === "katalog" ? "active" : ""}>
              <Link href="/katalog">KATALOG</Link>
            </li>
            <li className={activePage === "blog" ? "active" : ""}>
              <Link href="/blog">BLOG</Link>
            </li>
          </ul>
        </nav>

        {/* Tambahan: Keranjang */}
        <Link href="/keranjang" className="cart-link">
          <ShoppingCart size={26} />
        </Link>
        <button
          className="signup-btn"
          onClick={() => (window.location.href = "/auth")}
        >
          SIGN UP
        </button>
      </div>
    </header>
  );
}
