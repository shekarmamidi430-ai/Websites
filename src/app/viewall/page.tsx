"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";



const mediaItems = [
  { type: "image", src: "/event1.jpeg" },
  { type: "video", src: "/eventvideo1.mp4" },
  { type: "image", src: "/event2.jpeg" },
  { type: "image", src: "/event4.jpeg" },
  { type: "video", src: "/eventvideo2.mp4" },
  { type: "image", src: "/event4.jpeg" },
  { type: "image", src: "/event10.jpeg" },
  { type: "video", src: "/eventvideo3.mp4" },
  { type: "image", src: "/event5.jpeg" },
  { type: "image", src: "/event6.jpeg" },
  { type: "video", src: "/eventvideo4.mp4" },
  { type: "image", src: "/event6.jpeg" },
  { type: "image", src: "/event7.jpeg" },
  { type: "video", src: "/eventvideo5.mp4" },
  { type: "image", src: "/event9.jpg" },
  { type: "image", src: "/event8.jpg" },
  { type: "video", src: "/eventvideo6.mp4" },
  { type: "video", src: "/eventvideo7.mp4" },
  { type: "video", src: "/eventvideo8.mp4" },
  { type: "image", src: "/event9.jpg" },
  { type: "image", src: "/event12.jpeg" },
  { type: "video", src: "/eventvideo9.mp4" },
  { type: "image", src: "/event22.jpg" },
  { type: "image", src: "/event13.jpeg" },
  { type: "video", src: "/eventvideo10.mp4" },
  { type: "image", src: "/event14.jpeg" },
  { type: "image", src: "/event15.jpeg" },
  { type: "video", src: "/eventvideo11.mp4" },
  { type: "image", src: "/event16.jpeg" },
  { type: "image", src: "/event17.jpeg" },
  { type: "video", src: "/eventvideo12.mp4" },
  { type: "image", src: "/event18.jpeg" },
  { type: "image", src: "/event19.jpg" },
  { type: "video", src: "/eventvideo13.mp4" },
  { type: "image", src: "/event24.jpeg" },
  { type: "image", src: "/event25.jpeg" },
  { type: "video", src: "/eventvideo14.mp4" },
  { type: "video", src: "/eventvideo15.mp4" },
  { type: "video", src: "/eventvideo16.mp4" },
  { type: "image", src: "/event21.jpg" },
];

export default function ServicesPage() {
  const [active, setActive] = useState("digital");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <section className={styles.hero}>
        <header className={styles.navbar}>
          <div className={styles.navLeft}>
            <Link href="/dashboard">
              <img
                src="/prag.png"
                alt="pragmatiq"
                className={styles.logo}
              />
            </Link>
          </div>

          <nav className={styles.navCenter}>
            <Link href="/healthcare">Healthcare</Link>
            <Link href="/education">Education</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About us</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact us</Link>
          </nav>

          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </header>

        {menuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/healthcare" onClick={() => setMenuOpen(false)}>Healthcare</Link>
            <Link href="/education" onClick={() => setMenuOpen(false)}>Education</Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About us</Link>
            <Link href="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
          </div>
        )}

        <div className={styles.heroContent}>
          <div className={styles.centerContent}>
            <h1 className={styles.heading}>All Events</h1>
            <p className={styles.aboutText}>
              Explore our events that inspire innovation and knowledge sharing.
              From expert talks and workshops to industry meetups and training programs, our events connect ideas with action across Healthcare, Education, Agriculture, and Life Sciences.
            </p>
          </div>
        </div>
      </section>


      <section className={styles.wrapper}>
        <div className={styles.masonry}>
          {mediaItems.map((item, index) => (
            <div className={styles.item} key={index}>
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt="Gallery media"
                  width={800}
                  height={1000}
                  className={styles.media}
                />
              ) : (
                <video
                  src={item.src}
                  className={styles.media}
                  muted
                  loop
                  controls
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer10}>
        <div className={styles.container10}>

          <div className={styles.col10}>
            <div className={styles.logo10}>
              <span>Pragmatiq Systems</span>

            </div>
            <p>
              A sustainable technology company pioneering cutting-edge solutions in Healthcare, Education, Agriculture, and Life Sciences.
            </p>
          </div>


          <div className={styles.col10}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/healthcare">Heaithcare</Link></li>
              <li><Link href="/about">Education</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/events">Events</Link></li>
            </ul>
          </div>


          <div className={styles.col10}>
            <h4>Services</h4>
            <ul>
              <li>wed development</li>
              <li>UI/UX Design</li>
              <li>Marketing Research</li>
              <li>Testing</li>
              <li>Mobile application</li>
            </ul>
          </div>


          <div className={styles.col10}>
            <h4> Office Address</h4>
            <p>
              3rd Floor, Neelagiri Complex, Plot No. 36-C & 43-C, Raghavendra Nagar Colony, Kondapur, Serilingampally, Telangana 500084, India;
            </p>

          </div>
        </div>

      </footer>
    </>
  );
}
