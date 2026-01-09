"use client";

import styles from "./page.module.css";
import Link from "next/link";

import { SetStateAction, useState } from "react";

export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    <>
      <main className={styles.hero}>

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
        
        <div className={styles.content}>
          <h1>Want to talk?</h1>

          <div className={styles.author}>
            <p>
              Whatever your enquiry, one of us will get in touch with you.
            </p>
          </div>
        </div>
      </main>

      <section className={styles.wrapper1}>

        <div className={styles.left1}>
          <div className={styles.block1}>
            <h2>Business Enquiry</h2>
            <p>pragmatiq.in</p>
          </div>

          <div className={styles.block1}>
            <h2>Call us</h2>
            <p>+91 xxx xxxx xx</p>
          </div>


        </div>


        <div className={styles.right1}>
          <div className={styles.tabs1}>
            <span className={styles.active1}>Business</span>
            <span>Careers</span>
            <span>Others</span>
          </div>

          <form className={styles.form1}>
            <div className={styles.row1}>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <div className={styles.row1}>
              <input type="text" placeholder="Company name" />
              <input type="email" placeholder="Email*" />
            </div>

            <div className={styles.row1}>
              <div className={styles.phone1}>
                <select>
                  <option>India </option>
                </select>
                <span className={styles.code1}>+91</span>
              </div>
              <input type="tel" placeholder="Phone number*" />
            </div>

            <textarea placeholder="How We Can Help You" rows={4} />

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <section className={styles.presenceSection2}>

        <div className={styles.left2}>
          <h1>
            <span className={styles.gray2}>Our</span>
            <br />
            <span className={styles.green2}>Presence</span>
          </h1>
        </div>


        <div className={styles.rightGrid2}>

          <div className={styles.card2}>
            <h3>Pragmatiq systems</h3>
            <p>   A sustainable technology company pioneering cutting-edge solutions in Healthcare, Education, Agriculture, and Life Sciences. </p>

            <a href="#" className={styles.link2}>
              Get Direction <span>→</span>
            </a>
          </div>


          <div className={styles.card2}>
            <h3>Office Address</h3>
            <p>
              3rd Floor, Neelagiri Complex, Plot No. 36-C & 43-C, Raghavendra Nagar Colony, Kondapur, Serilingampally, Telangana 500084, India;

            </p>

            <a href="#" className={styles.link2}>
              Get Direction <span>→</span>
            </a>
          </div>



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
