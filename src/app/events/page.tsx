"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const festivals = [
    { title: "6.0 pragmatiq", image: "/festival1.jpg" },
    { title: "6.0 pragmatiq", image: "/festival2.jpg" },
    { title: "DIWALI", image: "/festival3.jpg" },
    { title: "DIWALI", image: "/festival4.jpg" },
    { title: "anniversary", image: "/festival5.jpg" },
    { title: "DIWALI", image: "/festival6.jpeg" },
    { title: "vinayaka chavithi", image: "/festival7.jpeg" },
    { title: "vinayaka chavithi", image: "/festival8.jpeg" },
    { title: "DIWALI", image: "/festival9.jpeg" },
    { title: "6.0 pragmatiq", image: "/festival1.jpg" },
    { title: "6.0 pragmatiq", image: "/festival2.jpg" },
    { title: "DIWALI", image: "/festival3.jpg" },
    { title: "DIWALI", image: "/festival4.jpg" },
    { title: "anniversary", image: "/festival5.jpg" },
    { title: "DIWALI", image: "/festival6.jpeg" },
    { title: "vinayaka chavithi", image: "/festival7.jpeg" },
    { title: "vinayaka chavithi", image: "/festival8.jpeg" },
    { title: "DIWALI", image: "/festival9.jpeg" },

];




const blogs = [
    {
        id: 1,
        title: "Anniversary",
        image: "/festival5.jpg",
    },
    {
        id: 2,
        title: "6.0 Pragmatiq",
        image: "/festival1.jpg",
    },
    {
        id: 3,
        title: " Pragmatiq Systems",
        image: "/grid11.jpeg",
    },
];


export default function Home() {
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
                    <div className={styles.left}>
                        <div className={styles.tags}>
                            <div className={styles.tag}>
                                <span className={styles.circle}></span>
                                Explore Festivals
                            </div>
                        </div>

                        <h1 className={styles.heading}>
                            FESTIVALS
                            <br />
                            FROM
                            <br />
                            Pragmatiq
                        </h1>
                    </div>
                </div>
            </section>

            <section className={styles.wrapper1}>
                <div className={styles.header1}>
                    <h2> Events</h2>

                </div>

                <div className={styles.marquee1}>
                    <div className={styles.track1}>
                        {[...festivals, ...festivals].map((item, index) => (
                            <div className={styles.card1} key={index}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={250}
                                    height={250}
                                    className={styles.cardImage1}
                                />
                                <span className={styles.label1}>{item.title}</span>
                                <span className={styles.arrow1}>›</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.wrapper2}>
                <div className={styles.container2}>

                    <div className={styles.mainCard2}>
                        <div className={styles.topRow2}>
                            <div>
                                <h2>Pragmatiq Systems</h2>
                                <p className={styles.subText2}>
                                    “Celebrate Innovation & Sustainability! Join our Healthcare, Education, Agriculture, <br />
                                    & Life Sciences Festivals — Explore Workshops, Webinars & Special Events!”
                                </p>
                            </div>
                        </div>

                        <div className={styles.contentRow2}>
                            <img
                                src="/festival4.jpg"
                                alt="Creative Art Workshop"
                                className={styles.mainImage2}
                            />

                            <div className={styles.details2}>
                                <h3>Sustainable Innovation Festival – Explore All Events</h3>
                                <p>
                                    Celebrate groundbreaking solutions across Healthcare, Education, Agriculture,
                                    and Life Sciences! Join our interactive festival featuring workshops, webinars,
                                    and special events designed to inspire, educate, and connect innovators,
                                    enthusiasts, and communities. Discover exciting opportunities, network with experts,
                                    and experience the future of sustainable technology.
                                </p>
                            </div>

                        </div>
                    </div>


                    <div className={styles.sideCards2}>
                        <div className={styles.sideCard2}>
                            <img src="/festival5.jpg" alt="Tech Seminar" />
                        </div>

                        <div className={styles.sideCard2}>
                            <img src="/festival2.jpg" alt="Health & Wellness Webinar" />
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.wrapper3}>
                <div className={styles.header3}>
                    <h2>Explore Our Latest Blog</h2>
                    <Link href="/viewall">
                        <button className={styles.viewAll3}>
                            View All Posts <ArrowRightOutlined />
                        </button>
                    </Link>
                </div>

                <div className={styles.grid3}>
                    {blogs.map((blog) => (
                        <div key={blog.id} className={styles.card3}>
                            <div className={styles.imageWrapper3}>
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className={styles.image3}
                                />
                            </div>

                            <h3>{blog.title}</h3>
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
