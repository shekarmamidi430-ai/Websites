"use client";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

import { SetStateAction, useState } from "react";

import { Row, Col, Card, Typography } from "antd";

import {

    TrophyOutlined,
    TeamOutlined,
    ProjectOutlined,
    RiseOutlined,
} from "@ant-design/icons";
import {
    CodeOutlined,
    BgColorsOutlined,
    MobileOutlined,
    ApiOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Paragraph } = Typography;



const team = [
    {
        name: "Salaja",
        role: "Manager",
        image: "/team/1.jpg",
    },
    {
        name: "Teja",
        role: "Mobile Developer",
        image: "/team/2.jpg",
    },
    {
        name: "Ganesh",
        role: "UI/UX designer",
        image: "/ganesh.jpeg",
    },
    {
        name: "Prasad",
        role: "FUll stack Web developer",
        image: "/prasad.jpeg",
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
                    <div className={styles.centerContent}>
                        <h1 className={styles.heading}>About us</h1>

                        <p className={styles.aboutText}>
                            We are a purpose-driven technology company focused on creating
                            sustainable digital solutions across healthcare, education,
                            and emerging industries. Our goal is to transform ideas into
                            impactful products that drive real-world change.
                        </p>
                    </div>
                </div>

            </section>

            <section className={styles.wrapper1}>

                <div className={styles.left1}>
                    <span className={styles.subTitle1}>Company Mission</span>

                    <h1 className={styles.title1}>
                        Driving Innovation for a Sustainable
                        <br />
                        <span> and connected future</span>
                    </h1>


                    <p className={styles.description1}>
                        The history of logistics dates back to ancient civilizations, where the development of transportation systems and trade networks played a crucial role in the exchange of goods and information. Building on this foundation, our mission is to harness modern, sustainable technologies to transform how industries operate today.
                    </p>

                    <p className={styles.description1}>
                        As a sustainable technology company, we venture cutting-edge solutions across the realms of Healthcare, Education, Agriculture, and Life Sciences, focusing on efficiency, accessibility, and long-term impact. Our goal is to bridge innovation with responsibility—empowering communities, optimizing systems, and driving meaningful progress through technology.
                    </p>
                </div>

                <div className={styles.right1}>
                    <Image
                        src="/mission.jpg"
                        alt="Mission team"
                        fill
                        className={styles.image1}
                        priority
                    />
                </div>
            </section>

            <section className={styles.wrapper11}>
                <Row gutter={48} align="middle">

                    <Col xs={24} md={12}>
                        <div className={styles.imageGrid11}>
                            <div className={styles.imageSmall11}>
                                <Image src="/vision1.jpg" alt="Team" fill />
                            </div>

                            <div className={styles.imageLarge11}>
                                <Image src="/vision2.jpg" alt="Presentation" fill />
                            </div>

                            <div className={styles.imageSmallBottom11}>
                                <Image src="/vision3.jpg" alt="Discussion" fill />
                            </div>
                        </div>
                    </Col>


                    <Col xs={24} md={12}>
                        <span className={styles.subTitle11}>COMPANY VISION</span>

                        <Title level={2} className={styles.title11}>
                            Building Sustainable <br /> Technology for Tomorrow
                        </Title>

                        <Paragraph className={styles.description11}>
                            We are a sustainable technology company venturing into cutting-edge
                            digital solutions that create meaningful impact. Our vision is to
                            harness innovation to empower industries, enhance lives, and build
                            a smarter, more sustainable future.
                        </Paragraph>

                        <Card className={styles.infoCard11}>
                            <div className={styles.cardContent11}>
                                <div className={`${styles.badge11} ${styles.green11}`}>01</div>
                                <div>
                                    <h4>Innovation Across Critical Sectors</h4>
                                    <p>
                                        We envision transformative solutions in Healthcare, Education,
                                        Agriculture, and Life Sciences—driven by technology that is
                                        intelligent, ethical, and future-ready.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className={styles.infoCard11}>
                            <div className={styles.cardContent11}>
                                <div className={`${styles.badge11} ${styles.yellow11}`}>02</div>
                                <div>
                                    <h4>Purpose-Driven Digital Transformation</h4>
                                    <p>
                                        Our goal is to help organizations adopt sustainable digital
                                        systems that enable growth, resilience, and long-term value
                                        for both business and society.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className={styles.aboutSection2}>
                <div className={styles.left2}>
                    <div className={styles.imageStack2}>
                        <Image
                            src="/about1 (1).jpg"
                            alt="Team discussion"
                            width={300}
                            height={180}
                            className={styles.imgTop2}
                        />

                        <Image
                            src="/about1 (2).jpg"
                            alt="Professional woman"
                            width={330}
                            height={260}
                            className={styles.imgBottom2}
                        />

                        <div className={styles.experienceBadge2}>
                            <h2>5+</h2>
                            <p>
                                Years of
                                <br />
                                Experience
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.right2}>
                    <span className={styles.subtitle2}>ABOUT OUR COMPANY</span>

                    <h1>
                        Driving Sustainable Innovation
                        <br />
                        Through Technology
                    </h1>

                    <p className={styles.desc2}>
                        We are a sustainable technology company focused on building
                        future-ready digital solutions that create real-world impact.
                        By combining innovation, strategy, and responsibility, we help
                        organizations transform their operations and deliver lasting value
                        across industries.
                    </p>

                    <h4>Our Core Technology Focus</h4>

                    <ul className={styles.list2}>
                        <li>
                            <CodeOutlined /> Web Development
                        </li>
                        <li>
                            <BgColorsOutlined /> UI/UX Design
                        </li>
                        <li>
                            <MobileOutlined /> Mobile Application
                        </li>
                        <li>
                            <ApiOutlined /> Full Stack Development
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.statsBar2}>
                <div className={styles.stat2}>
                    <RiseOutlined />
                    <h3>5+</h3>
                    <p>Years Of Experience</p>
                </div>

                <div className={styles.stat2}>
                    <ProjectOutlined />
                    <h3>50+</h3>
                    <p>Complete Project</p>
                </div>

                <div className={styles.stat2}>
                    <TeamOutlined />
                    <h3>40+</h3>
                    <p>Team Members</p>
                </div>

                <div className={styles.stat2}>
                    <TeamOutlined />
                    <h3>30+</h3>
                    <p>Clients</p>
                </div>
            </section>

            <section className={styles.wrapper3}>
                <div className={styles.grid3}>

                    <div className={`${styles.card3} ${styles.big3}`}>
                        <Image src="/festival5.jpg" alt="" fill />
                    </div>

                    <div className={`${styles.card3} ${styles.small3}`}>
                        <Image src="/festival1.jpg" alt="" fill />
                    </div>

                    <div className={`${styles.card3} ${styles.tall3}`}>
                        <Image src="/number7.jpeg" alt="" fill />
                    </div>


                    <div className={`${styles.card3} ${styles.medium3}`}>
                        <Image src="/festival4.jpg" alt="" fill />
                    </div>

                    <div className={`${styles.card3} ${styles.small3}`}>
                        <Image src="/festival2.jpg" alt="" fill />
                    </div>


                    <div className={`${styles.card3} ${styles.big3}`}>
                        <Image src="/festival3.jpg" alt="" fill />
                    </div>

                    <div className={`${styles.card3} ${styles.tall3}`}>
                        <Image src="/festival5.jpg" alt="" fill />
                    </div>
                    <div className={`${styles.card3} ${styles.small3}`}>
                        <Image src="/diwali6.jpeg" alt="" fill />
                    </div>
                    <div className={`${styles.card3} ${styles.big3}`}>
                        <Image src="/festival2.jpg" alt="" fill />
                    </div>


                    <div className={`${styles.card3} ${styles.big3}`}>
                        <Image src="/grid11.jpeg" alt="" fill />
                    </div>




                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.header}>
                    <div className={styles.titleWrap}>
                        <span className={styles.icon}></span>
                        <h2>Management</h2>
                    </div>
                </div>

                <div className={styles.cardsWrapper}>
                    <div className={styles.personCard}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/bharatsir.jpg"
                                alt="Bharat Gujavarti"
                                fill
                                priority
                            />
                        </div>
                        <h4>Bharat Gujavarti</h4>
                        <span>Founder & CEO</span>
                    </div>

                    <div className={styles.personCard}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/mam.png"
                                alt="Archana Kadarla"
                                fill
                            />
                        </div>
                        <h4>Archana Kadarla</h4>
                        <span>Project Manager</span>
                    </div>

                    <div className={styles.personCard}>
                        <div className={styles.imgWrap}>
                            <Image
                                src="/sasisir.png"
                                alt="Sasikanth Reddy Vanga"
                                fill
                            />
                        </div>
                        <h4>Sasikanth Reddy Vanga</h4>
                        <span>Manager</span>
                    </div>
                </div>
            </section>


            <section className={styles.wrapper5}>
                <div className={styles.header5}>
                    <span>Our Team</span>
                    <h2>Creative Team Members</h2>
                    <p>
                        Our Team Lead plays a critical role in guiding teams toward successful delivery while fostering collaboration, accountability, and innovation. They bridge strategy and execution—mentoring team members, aligning technical efforts with business goals, and ensuring projects are delivered efficiently and sustainably.
                    </p>
                </div>

                <div className={styles.grid5}>
                    {team.map((member, index) => (
                        <div className={styles.card} key={index}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={260}
                                height={300}
                                className={styles.image5}
                            />
                            <h4>{member.name}</h4>
                            <span>{member.role}</span>
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
