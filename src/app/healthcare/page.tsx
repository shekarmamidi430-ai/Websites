"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const logos = [
  "/desktop1.png",
  "/desktop2.png",
  "/desktop3.png",
  "/desktop4.png",
  "/desktop5.png",
  "/desktop6.png",
  "/desktop7.png",
];

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
          <h1>
            ABDM Integrated Personalized Health Solutions Platform
            <br />
            In association with Clinally
          </h1>

          <div className={styles.author}>
            <p>
              We empower the healthcare ecosystem with sustainable,
              technology-driven solutions that enhance patient outcomes,
              streamline clinical workflows, and enable data-driven
              decision-making. From digital health platforms and telemedicine
              systems to AI-assisted diagnostics and secure health data
              management, our solutions are designed to improve accessibility,
              efficiency, and long-term impact across modern healthcare
              environments.
            </p>
          </div>
        </div>
      </main>

      <section className={styles.hero1}>
        <div className={styles.left1}>
          <span className={styles.badge1}>
            Platform for Healthcare Access
          </span>

          <h1>
            AI Voice Agents
            <br />
            for Healthcare
            <br />
            Access & RCM
          </h1>

          <p>
            Purpose-built to manage patient, provider,
            <br />
            and payer communications — improving access,
            efficiency, and care outcomes
          </p>

          <div className={styles.call1}>
            Call to experience our healthcare AI agent:
            <strong> +00 xxx xxxx</strong>
          </div>
        </div>


        <div className={styles.right1}>
          <div className={styles.orbit1}>
            <div className={styles.agent1}>
              <Image
                src="/image.jpg"
                alt="Healthcare AI Voice Agent"
                width={420}
                height={220}
              />
            </div>

            <div className={`${styles.card1} ${styles.topRight1}`}>
              🏥 Patient Appointment Scheduling
            </div>

            <div className={`${styles.card1} ${styles.cardRight1}`}>
              🧾 Insurance & Eligibility Verification
            </div>

            <div className={`${styles.card1} ${styles.bottomRight1}`}>
              💳 Medical Billing & Payments
            </div>

            <div className={`${styles.card1} ${styles.bottom1}`}>
              🔁 Preventive Care Re-Engagement
            </div>

            <div className={`${styles.card1} ${styles.topLeft1}`}>
              ☎ Intelligent Healthcare Switchboard
            </div>
          </div>
        </div>
      </section>


      <section className={styles.wrapper2}>
        <div className={styles.badge2}>
          Our Products & Services
          <span className={styles.spark2}>✦</span>
        </div>

        <div className={styles.marquee2}>
          <div className={styles.track2}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.logoBox2}>
                <Image
                  src={logo}
                  alt="Healthcare Partner"
                  width={140}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.container3}>
          <h1 className={styles.heading3}>Our Current Projects</h1>

          <p className={styles.subheading3}>
            ClinAlly mPower Health is a fully compliant ABDM (Ayushman Bharat Digital Mission) platform, intelligently designed to empower doctors in delivering superior patient care. This comprehensive application, grounded in scientific principles, offers evaluation, screening, investigations, clinical management, lifestyle advice, and follow-up scheduling for patients with hypertension and diabetes. Developed in collaboration with AIIMS, New Delhi, and CCDC, our platform embodies the cutting-edge fusion of technology and medical expertise.
          </p>

          <div className={styles.content3}>

            <div className={styles.projectPair}>
              <div className={styles.statImage}>
                <img src="/clinally.png" alt="Project 1" />
              </div>
              <div className={styles.caseStudy3}>
                <img src="/prag2.jpg.png" alt="Logo" className={styles.logo3} />
                <h3>SDG 3 - Good Health and Well Being (Healthcare)</h3>
                <h1>ClinAlly mPower Health for Doctors</h1>
                <p>
                  ClinAlly mPower Health is a fully compliant ABDM (Ayushman Bharat Digital Mission) platform, intelligently designed to empower doctors in delivering superior patient care. This comprehensive application offers evaluation, screening, investigations, clinical management, lifestyle advice, and follow-up scheduling for patients with hypertension and diabetes. Developed in collaboration with AIIMS, New Delhi, and CCDC.
                </p>
              </div>
            </div>


            <div className={`${styles.projectPair} ${styles.reverse}`}>
              <div className={styles.caseStudy3}>
                <img src="/prag3.jpg.png" alt="Logo" className={styles.logo3} />
                <h3>SDG 3 - Good Health and Well Being (Healthcare)</h3>
                <h1>Clinally ai.m Healthy for all</h1>
                <p>
                  Clinally ai.m Healthy is an essential digital health locker that meticulously manages your comprehensive health records and those of your family, all in compliance with ABDM standards. It efficiently tracks doctor visits, fitness data, medications, and vital information. ai.m Healthy also offers up-to-date health updates and internationally approved health calculators. A digital Health Bro, genuinely dedicated to your well-being.
                </p>
              </div>
              <div className={styles.statImage}>
                <img src="/clinally7.png" alt="Project 2" />
              </div>
            </div>


            <div className={styles.projectPair}>
              <div className={styles.statImage}>
                <img src="/clinally22.jpg" alt="Project 3" />
              </div>
              <div className={styles.caseStudy3}>
                <img src="/prag4.jpg.png" alt="Logo" className={styles.logo3} />
                <h3>SDG 4 - Quality Education</h3>
                <h1>PadhoBadho</h1>
                <p>
                  Padhobadho, an innovative edtech start-up, is spearheading a transformative mission by revolutionizing education delivery in rural India. With a resolute ambition, Padhobadho seeks to offer relevant education to millions in small towns and villages, opening the doors to quality learning that was hitherto inaccessible. Crucially, Padhobadho is committed to achieving this vision through a user-friendly and easily understandable language, fostering inclusivity and equitable education for all.
                </p>
              </div>
            </div>

            <div className={`${styles.projectPair} ${styles.reverse}`}>
              <div className={styles.caseStudy3}>
                <img src="/prag1.jpg.svg" alt="Logo" className={styles.logo3} />
                <h3>SDG 3 - Good Health and Well Being (Healthcare)</h3>
                <h1>Clinally Clinical Decision Support System (CDSS) for Doctors</h1>
                <p>
                  ClinAlly CDSS, a culmination of years of rigorous research by esteemed doctors in collaboration with AIIMS, New Delhi, and CCDC, is an intelligent decision engine, offering valuable guidance to healthcare providers based on patients' clinical parameters. This pivotal resource facilitates task shifting and enables physicians to attend to a larger patient base. Currently encompassing modules for NCDs, TB, Osteo, Heart Failure, and COPD, ongoing research is dedicated to exploring additional medical conditions.
                </p>
              </div>
              <div className={styles.statImage}>
                <img src="/Clinally4.jpg" alt="Project 4" />
              </div>
            </div>


            <div className={styles.projectPair}>
              <div className={styles.statImage}>
                <img src="/clinally5.jpg" alt="Project 5" />
              </div>
              <div className={styles.caseStudy3}>
                <img src="/desktop3.png" alt="Logo" className={styles.logo3} />
                <h3>SDG 2 - Zero Hunger (Agriculture)</h3>
                <h1>LandLordz</h1>
                <p>
                  Agro-realty, albeit is a relatively recent concept in India, has been well-established in Western countries for quite some time. In nations like the USA and UK, people have been making land investments in agro-realty to reap the benefits of cultivating edible fruits and vegetables while bolstering their income. For some, it even transforms into a delightful recreational space to enjoy over the weekends.
                </p>
              </div>
            </div>

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
