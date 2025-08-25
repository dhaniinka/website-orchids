"use client";

import '../../styles/blog.css';
import Image from 'next/image';
import Navbar from '../../components/Navbar'; // Navbar reusable

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Tips merawat anggrek agar cepat berbunga',
      desc: 'Anggrek yang tumbuh baik di dataran tinggi dengan ketinggian 1.001 m dpl dengan suhu di siang hari 18–21° C dan malam hari 13–18° C.',
      img: '/Tips1.png',
      alt: 'Anggrek putih',
    },
    {
      id: 2,
      title: 'Tips merawat anggrek agar cepat berbunga',
      desc: 'Anggrek yang tumbuh baik di dataran tinggi dengan ketinggian 1.001 m dpl dengan suhu di siang hari 18–21° C dan malam hari 13–18° C.',
      img: '/Tips2.png',
      alt: 'Anggrek pink',
    },
    {
      id: 3,
      title: 'Tips merawat anggrek agar cepat berbunga',
      desc: 'Anggrek yang tumbuh baik di dataran tinggi dengan ketinggian 1.001 m dpl dengan suhu di siang hari 18–21° C dan malam hari 13–18° C.',
      img: '/Tips3.png',
      alt: 'Anggrek ungu',
    },
  ];

  return (
    <div className="blog-page">
      {/* Navbar reusable */}
      <Navbar activePage="blog" />

      {/* Main Blog Content */}
      <main className="main-content">
        <div className="articles">
          <h3>Tips and Trick</h3>
          <hr />
          {articles.map((article) => (
            <div key={article.id} className="article">
              <Image src={article.img} alt={article.alt} width={200} height={130} />
              <div>
                <h4>{article.title}</h4>
                <p>{article.desc}</p>
                <div className="icons">🔄 🤍</div>
              </div>
            </div>
          ))}
        </div>

        <aside className="sidebar">
          <h4>Orchids</h4>
          <hr />
          <div className="sidebar-card">
            <Image src="/TanamanHias.png" alt="Tanaman Hias Anggrek" width={400} height={180} />
            <div className="content">
              <h5>Tanaman Hias - Anggrek</h5>
              <small>Agu 01, 2025</small>
              <p>
                Anggrek merupakan tanaman bunga hias yang indah. Sudah dikenal sejak 200 tahun lalu dan populer dalam 50 tahun terakhir.
              </p>
              <div className="icons">🔄 🤍</div>
            </div>
          </div>

          <h4>Facebook</h4>
          <hr />
          <div className="sidebar-card">
            <Image src="/FbAnggrek.png" alt="Facebook Anggrek" width={400} height={180} />
            <div className="content">
              <p>Tanaman Hias - Anggrek</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
