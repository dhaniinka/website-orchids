"use client";

import '../../styles/katalog.css';
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Katalog() {
  const products = [
    { id: 1, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/flower1.png", discount: 20 },
    { id: 2, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/PhalaenoplsisPurple.png", discount: 20 },
    { id: 3, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/PhalaneopsisWhite.png", discount: 20 },
    { id: 4, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/PhalaenopsisViolet.png", discount: 20 },
    { id: 5, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/PhalaenopsisPink.png", discount: 20 },
    { id: 6, name: "Yellow Shine Girl", price: "Rp.940.000", img: "/flower6.png", discount: 20 },
  ];

  return (
    <>
      <Navbar activePage="katalog" />
      
      <main className="katalog-page">
        <header className="page-title">
          <h1>OUR PRODUCTS</h1>
        </header>
        
        <section className="product-grid">
          {products.map(({ id, name, price, img, discount }) => (
            <article key={id} className="card">
              <span className="discount">{discount}%</span>
              <Image src={img} alt={name} width={280} height={220} />
              
              <div className="actions">
                <button aria-label="Add to favorites">♡</button>
                <button>Add to Cart</button>
                <button aria-label="Share product">↗</button>
              </div>
              
              <div className="card-content">
                <h3>{name}</h3>
                <p>{price}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
