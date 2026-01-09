"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Layout, Menu, Card, Collapse, Typography, Button } from "antd";
import {
  RightOutlined,
  PhoneOutlined,
} from "@ant-design/icons";


const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const SERVICES = {
  digital: {
    hero: "/wedevelopment.jpeg",
    overview:
      "We offer comprehensive web development services designed to create visually appealing, high-performing, and secure digital experiences. Our team focuses on building websites that are not only attractive but also technically robust, ensuring seamless functionality across all devices and browsers. Every project is developed with scalability, performance, and future growth in mind.",
    faqs: [
      {
        q: "What does a web development company do?",
        a: "A web development company designs, builds, and maintains websites and web applications that are fast, secure, and scalable.",
      },
      {
        q: "Do you develop websites for startups and businesses?",
        a: "Yes, we work with startups, SMEs, and enterprises to create custom web solutions tailored to their business goals.",
      },
    ],
  },

  design: {
    hero: "/UIUX.jpeg",
    overview:
      "We craft user-centric UI/UX designs that balance creativity and usability. Through in-depth research, wireframing, and interactive prototyping, we design experiences that feel seamless and intuitive. Every interface is built to guide users effortlessly, ensuring clarity, accessibility, and consistency across platforms.",
    faqs: [
      {
        q: "Do you design mobile-friendly user interfaces?",
        a: "Yes, we follow a mobile-first approach to create fully responsive and user-friendly interfaces across all devices.",
      },
      {
        q: "Do you follow UI/UX design standards and best practices?",
        a: "Absolutely. We adhere to modern UI/UX principles, usability standards, and accessibility guidelines to ensure an intuitive user experience.",
      },
    ],
  },

  development: {
    hero: "/MOBILE.jpeg",
    overview:
      "We design and develop high-performance mobile applications that deliver seamless user experiences across Android and iOS platforms. Our mobile solutions are built with a strong focus on scalability, security, and performance, ensuring your app grows alongside your business.",
    faqs: [
      {
        q: "Which technologies do you use for mobile app development?",
        a: "We use modern technologies such as React Native, Flutter, native Android (Kotlin), and iOS (Swift) to build high-performance mobile applications.",
      },
      {
        q: "Do you build custom mobile applications?",
        a: "Yes, all our mobile applications are custom-built to match your business requirements, user experience goals, and scalability needs.",
      },
    ],
  },

  application: {
    hero: "/marketing.webp",
    overview:
      "Turn your ideas into powerful mobile experiences. We create high-impact mobile applications that connect your brand with users anytime, anywhere. Our apps are designed to be visually engaging, lightning-fast, and easy to use—helping businesses increase customer engagement and drive growth.",
    faqs: [
      {
        q: "Do you provide digital marketing services?",
        a: "Yes, we offer end-to-end digital marketing solutions including SEO, social media marketing, paid advertising, and content strategy.",
      },
      {
        q: "Can you help with online growth and lead generation?",
        a: "Absolutely. We create data-driven marketing campaigns focused on increasing brand visibility, generating quality leads, and driving conversions.",
      },
    ],
  },

  marketing: {
    hero: "/TESTING.jpeg",
    overview:
      "Deliver flawless digital experiences with our comprehensive testing and quality assurance services. We ensure your web and mobile applications are bug-free, secure, and performance-optimized before they reach your users.",
    faqs: [
      {
        q: "Do you provide software testing services?",
        a: "Yes, we offer manual and automated testing services to ensure application quality, performance, and reliability.",
      },
      {
        q: "Do you perform performance and security testing?",
        a: "Yes, we conduct performance, load, and security testing to identify issues and ensure stable, secure applications.",
      },
    ],
  },

  app: {
    hero: "/FRONTENED.jpeg",
    overview:
      "We craft visually stunning and high-performing frontend experiences that instantly capture attention and keep users engaged. Our frontend solutions combine modern design, smooth interactions, and fast load times to create interfaces your customers love to use.",
    faqs: [
      {
        q: "Do you build modern frontend applications?",
        a: "Yes, we develop high-performance frontend applications using modern frameworks like React, Next.js, and Vue.js.",
      },
      {
        q: "Do you support responsive and interactive user interfaces?",
        a: "Absolutely. We build responsive, accessible, and interactive interfaces that deliver a seamless user experience across all devices.",
      },
    ],
  },
};
const menuItems = [
  { key: "digital", icon: <RightOutlined />, label: "Web development" },
  { key: "design", icon: <RightOutlined />, label: "UI/UX Design" },
  { key: "development", icon: <RightOutlined />, label: "Mobile Application" },
  { key: "application", icon: <RightOutlined />, label: "Marketing" },
  { key: "marketing", icon: <RightOutlined />, label: "Testing" },
  { key: "app", icon: <RightOutlined />, label: "Frontend Development" },
];


export default function Home() {
  const [active, setActive] = useState<keyof typeof SERVICES>("digital");
  const data = SERVICES[active];
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <header className={styles.navbar}>
          <div className={styles.navLeft}>
            <Link href="/dashboard">
              <img src="/prag.png" alt="pragmatiq" className={styles.logo} />
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
            <h1 className={styles.heading}>Services</h1>
            <p className={styles.aboutText}>
              We deliver end-to-end technology services that help organizations
              design, build, and scale digital solutions across healthcare,
              education, and emerging industries.
            </p>
          </div>
        </div>
      </section>

      <Layout className={styles.wrapper}>
        <Sider width={280} className={styles.sidebar}>
          <Menu
            mode="vertical"
            selectedKeys={[active]}
            items={menuItems}
            onClick={(e) =>
              setActive(e.key as keyof typeof SERVICES)
            }
            className={styles.menu}
          />

          <div className={styles.contactBox}>
            <PhoneOutlined className={styles.phoneIcon} />
            <h3>Contact with us for any advice</h3>
            <p className={styles.phone}>+91 897 xxx xxxx</p>
            <Link href="/contact">
              <Button type="primary" block className={styles.bookBtn}>
                Book an appointment
              </Button>
            </Link>
          </div>
        </Sider>

        <Content className={styles.content}>
          <Image
            src={data.hero}
            alt="service"
            width={900}
            height={420}
            className={styles.heroImg}
          />

          <Title level={3}>Explanation</Title>
          <Paragraph>{data.overview}</Paragraph>

          <Title level={3}>Frequently Asked Questions</Title>
          <Collapse
            accordion
            items={data.faqs.map((item, index) => ({
              key: index.toString(),
              label: item.q,
              children: <p>{item.a}</p>,
            }))}
          />
        </Content>
      </Layout>

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







