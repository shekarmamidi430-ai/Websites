"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



import {
  BookOutlined,
  Html5Outlined,

  ApiOutlined,
  PlusOutlined, MinusOutlined
} from "@ant-design/icons";


import {
  FaReact,
  FaDocker,
  FaAws,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";

const faqs = [
  {
    question: "Are there any free courses available in this app?",
    answer:
      "Yes. We offer a selection of free introductory courses across Healthcare, Education, and Technology domains, allowing learners to explore concepts before enrolling in advanced programs.",
  },
  {
    question: "Do I have to sign up for a course to attend digital classes?",
    answer:
      "Yes. Signing up enables access to live digital classes, recorded sessions, personalized dashboards, and learning progress tracking.",
  },
  {
    question:
      "Do I need prior knowledge in a specific subject to use the app?",
    answer:
      "No prior experience is required. Our platform supports beginners to advanced learners with structured learning paths and guided resources.",
  },
  {
    question:
      "How does this application help students upgrade their skills?",
    answer:
      "The application combines expert-led courses, real-world projects, AI-assisted learning tools, and certifications to help learners gain industry-ready skills efficiently.",
  },
];







export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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
            Empowering learners and fostering
            <br />
            Personalized learning ecosystem
            <br />
            through pioneering Ed-tech initiatives
          </h1>

          <div className={styles.author}>
            <p>
              "Empowering learners and fostering a personalized learning ecosystem
              through pioneering Ed-tech initiatives, we aim to revolutionize
              education by making learning adaptive, engaging, and accessible to all."
            </p>
          </div>
        </div>
      </main>


      <section className={styles.hero1}>
        <div className={styles.container1}>
          <div className={styles.left1}>
            <h1>
              Empowering learners through
              <br />
              <span>sustainable technology.</span>
            </h1>

            <p>
              We develop innovative solutions in Healthcare, Education,
              Agriculture, and Life Sciences, helping learners and organizations
              gain knowledge and skills for a sustainable future.
            </p>
          </div>

          <div className={styles.right1}>
            <Image
              src="/startup2.jpg"
              alt="Student Learning"
              width={520}
              height={640}
              priority
            />

            <div className={styles.badge1}>
              <div className={styles.icon1}>
                <BookOutlined style={{ fontSize: 24, color: "#1890ff" }} />
              </div>
              <div>
                <strong>90%</strong>
                <span>Impact Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards1}>
          <div className={styles.card1}>
            <h3>24/7 Guidance</h3>
            <p>
              Access our expert mentors and resources anytime to support your
              learning journey.
            </p>
          </div>

          <div className={styles.card1}>
            <h3>Quick Response</h3>
            <p>
              Get your queries answered efficiently to keep your projects moving
              forward.
            </p>
          </div>

          <div className={styles.card1}>
            <h3>Expertly Curated</h3>
            <p>
              All our educational content and programs are designed by vetted
              experts.
            </p>
          </div>
        </div>
      </section>


      <section className={styles.aboutSection2}>
        <div className={styles.container2}>
          <div className={styles.imageWrap2}>
            <Image
              src="/clientservices.jpg"
              alt="Teacher"
              width={520}
              height={620}
              className={styles.image2}
              priority
            />
          </div>

          <div className={styles.content2}>
            <h1 className={styles.heading2}>Pragmatiq Systems</h1>

            <p className={styles.description2}>
              Pragmatiq's innovative education software products designed to
              empower educators, facilitate personalized learning experiences,
              and drive academic excellence.
            </p>

            <ul className={styles.list2}>
              <li>30+ Clients</li>
              <li>40+ Projects</li>

            </ul>
          </div>
        </div>
      </section>


      <section className={styles.hero3}>
        <div className={styles.left3}>
          <span className={styles.badge3}>
            Technology Platform
          </span>

          <h1>
            Intelligent AI <br />
            Solutions for <br />
            Modern Technology
          </h1>

          <p>
            Purpose-built to power scalable applications,
            <br />
            cloud infrastructure, and intelligent systems —
            <br />
            accelerating innovation, performance, and growth
          </p>

          <div className={styles.call3}>
            Explore our AI-powered tech solutions:
            <strong> Get in Touch</strong>
          </div>
        </div>


        <div className={styles.right3}>
          <div className={styles.orbit3}>

            <div className={styles.agent3}>
              <Image
                src="/tech.jpg"
                alt="Healthcare AI Voice Agent"
                width={280}
                height={260}
              />
            </div>


            <div className={`${styles.card3} ${styles.topRight3}`}>
              <Html5Outlined /> HTML5
            </div>

            <div className={`${styles.card3} ${styles.right3Card}`}>
              CSS
            </div>

            <div className={`${styles.card3} ${styles.bottomRight3}`}>
              <FaReact /> React
            </div>

            <div className={`${styles.card3} ${styles.bottom3}`}>
              <SiNextdotjs /> Next.js
            </div>

            <div className={`${styles.card3} ${styles.bottomLeft3}`}>
              Node.js
            </div>

            <div className={`${styles.card3} ${styles.left3Card}`}>
              <SiMongodb /> MongoDB
            </div>

            <div className={`${styles.card3} ${styles.topLeft3}`}>
              java
            </div>

            <div className={`${styles.card3} ${styles.topCenter3}`}>
              <FaDocker /> Docker
            </div>

            <div className={`${styles.card3} ${styles.centerRight3}`}>
              <ApiOutlined /> APIs
            </div>

            <div className={`${styles.card3} ${styles.centerLeft3}`}>
              <FaDatabase /> DB
            </div>

            <div className={`${styles.card3} ${styles.upperLeft3}`}>
              <FaPython /> Python
            </div>

            <div className={`${styles.card3} ${styles.upperRight3}`}>
              c++
            </div>
          </div>
        </div>

      </section>

      <section className={styles.faqSection4}>
        <div className={styles.container4}>

          <div className={styles.left4}>
            <Image
              src="/faq.png"
              alt="FAQ Illustration"
              width={420}
              height={420}
            />
          </div>


          <div className={styles.right4}>
            <span className={styles.label4}>FAQs</span>

            <h1 className={styles.title4}>
              Do you have <span>Questions?</span>
            </h1>

            <p className={styles.description4}>
              Here are some frequently asked questions about our educational and
              technology-driven services. If you need further assistance, feel
              free to reach out through our contact form.
            </p>

            <div className={styles.faqList4}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem4}>
                  <button
                    className={styles.faqQuestion4}
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                  >
                    {faq.question}
                    {activeIndex === index ? (
                      <MinusOutlined />
                    ) : (
                      <PlusOutlined />
                    )}
                  </button>

                  {activeIndex === index && (
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.services4}>
          <h2>Sustainable Technology Company</h2>
          <p>
            Venturing cutting-edge solutions in the realms of{" "}
            <strong>Healthcare, Education, Agriculture & Life Sciences</strong>.
          </p>

          <div className={styles.serviceGrid4}>
            <div className={styles.card4}>Healthcare AI Solutions</div>
            <div className={styles.card4}>EdTech Platforms</div>
            <div className={styles.card4}>AgriTech Innovations</div>
            <div className={styles.card4}>Life Science Analytics</div>
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
