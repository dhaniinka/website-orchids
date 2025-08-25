"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import '../styles/home.css';

export default function Home() {
  const [heroImage, setHeroImage] = useState("/PhalaneopsisWhite.png");
  const [ellipseColor, setEllipseColor] = useState("#A0A05D");
  const [activeThumb, setActiveThumb] = useState(0);
  const [rotate, setRotate] = useState(false);

  const thumbnails = [
    { src: "/PhalaneopsisWhite.png", color: "#A0A05D", alt: "White Orchid" },
    { src: "/PhalaenoplsisPurple.png", color: "#814C61", alt: "Purple Orchid" },
    { src: "/PhalaenopsisPink.png", color: "#D7A86E", alt: "Pink Orchid" },
    { src: "/PhalaenopsisViolet.png", color: "#8A56AC", alt: "Violet Orchid" },
  ];

  const handleThumbnailClick = (thumb, idx) => {
    if (idx === activeThumb) return; // kalau sama, tidak perlu update
    setActiveThumb(idx);
    setRotate(true);

    // update hero image & ellipse warna setelah delay rotasi selesai
    setTimeout(() => {
      setHeroImage(thumb.src);
      setEllipseColor(thumb.color);
      setRotate(false);
    }, 600); // durasi rotasi lebih cepat
  };

  const handleSignUp = () => {
    window.location.href = "/signup";
  };

  return (
    <>
      <Navbar activePage="home" />

      <main className="home">
        <section className="hero">
          <div className="hero-text">
            <h1>ORCHIDS</h1>
            <p>
              Dengan ragam warna, bentuk, dan makna yang mendalam, anggrek adalah
              simbol keanggunan, ketekunan, dan cinta sejati. Tak heran jika ia
              menjadi primadona di rumah, kantor, hingga hari-hari istimewa.
            </p>

            <div className="thumbnails">
              {thumbnails.map((thumb, idx) => (
                <div key={idx} className="thumb-wrapper">
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={60}
                    height={60}
                    onClick={() => handleThumbnailClick(thumb, idx)}
                    className={activeThumb === idx ? "active-thumb" : ""}
                  />
                  {/* garis bawah thumbnail */}
                  <span
                    className="thumb-underline"
                    style={{
                      backgroundColor: activeThumb === idx ? thumb.color : "transparent",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`hero-image ${rotate ? "rotate" : ""}`}>
            <Image src={heroImage} alt="Orchid" width={250} height={250} />
          </div>
        </section>

        <div
          className={`ellipse ${rotate ? "rotate" : ""}`}
          style={{ backgroundColor: ellipseColor }}
        />
      </main>
    </>
  );
}
