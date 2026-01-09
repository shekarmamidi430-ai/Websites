
"use client";

import { SetStateAction, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Row, Col, Typography, Card, Button, } from "antd";
import {
  DesktopOutlined,
  RiseOutlined,
  ThunderboltOutlined,
  CheckOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const testimonials = [
  {
    name: "Rajdeep Singh",
    role: "founder & CEO , PadhoBadho",
    image: "/client.png",
    quote:
      "As the founder of PadhoBadho,I highly recommend Pragmatiq Systems for their exceptional technical expertise in enhancing our website , server configurations, email setups , and AWS management.Their professionalism , dedication, and in-depth Knowledge have significantly contributed to our platform's success.",
  },
  {

    name: "Sudhir Patel",
    role: "Founder & CEO , Quinary Global",
    image: "/clients.png",
    quote:
      "Pragmatiq is our technology partner since 2020.Team is professional and has in depth knowledge of subject.We have always seen that leadership believes in quality work and long term impact.They are not only the service provider but thought partners too.",
  },
];

const team = [
  {
    name: "Bharat Gujavarti",
    role: "Founder & CEO",
    img: "/bharatsir.jpg",
  },
  {
    name: "Archana Kadarla",
    role: "Project Manager",
    img: "/mam.jpeg",
  },
  {
    name: "Sasikanth Reddy Vanga",
    role: "Manager",
    img: "/sasisir.png",
  },
];

const faqs = [
  {
    question: "What does your sustainable technology company focus on?",
    answer:
      "We focus on building cutting-edge, sustainable technology solutions that create meaningful impact across Healthcare, Education, Agriculture, and Life Sciences.",
  },
  {
    question: "How do your solutions create impact in Healthcare and Life Sciences?",
    answer:
      "Our technology enables smarter healthcare systems, improved patient outcomes, and data-driven life science innovations while maintaining sustainability and compliance.",
  },
  {
    question: "How do you support innovation in Education through technology?",
    answer:
      "We design scalable digital platforms that enhance learning accessibility, engagement, and efficiency, helping educational institutions adapt to a technology-driven future.",
  },
  {
    question: "How does your technology help the Agriculture sector?",
    answer:
      "We deliver intelligent, data-powered solutions for agriculture that improve productivity, sustainability, and resource optimization while supporting farmers and agribusinesses.",
  },
  {
    question: "Why choose you for sustainable and cutting-edge solutions?",
    answer:
      "We combine deep technical expertise, sustainability-driven thinking, and long-term impact-focused execution to deliver innovative solutions across critical industries.",
  },
];



export default function HomePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <>



      <section className={styles.hero}>
        <header className={styles.navbar}>
          <div className={styles.navLeft}>
            <Link href="/">
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
          <h5>Sustainable Technology Company</h5>

          <h1>
            Venturing <span>Cutting-Edge</span>
          </h1>

          <p className={styles.heroPara}>
            We are a sustainable technology company delivering innovative and
            impactful solutions across Healthcare, Education, Agriculture, and Life Sciences.
            Our mission is to empower startups and enterprises to leverage
            cutting-edge technologies, streamline operations, and drive
            meaningful change. From designing scalable software platforms
            to implementing AI-driven insights, we combine expertise, creativity,
            and sustainability to transform ideas into real-world solutions.
          </p>

          <div className={styles.features}>
            <div className={styles.feature}>
              <img src="/healthcare.jpg" alt="Healthcare Solutions" />
              <p>
                Healthcare <br /> Solutions
              </p>
            </div>

            <span className={styles.plus}>+</span>

            <div className={styles.feature}>
              <img src="/healthcare1.jpg" alt="Education Innovation" />
              <p>
                Education <br /> Innovation
              </p>
            </div>

            <span className={styles.arrow}>→</span>

            <div className={`${styles.feature} ${styles.highlight}`}>
              <img src="/agriculture1.jpg" alt="Education Innovation" />
              <p>
                Agriculture <br /> & Life Sciences
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className={styles.wrapper1}>
        <div className={styles.left1}>
          <h2 className={styles.heading1}>
            A <span>sustainable technology company</span>
            <br />
            delivering impact through:
          </h2>


          <ul className={styles.list1}>
            <li>
              <span className={styles.dot1} />
              <p>
                <strong>Venturing cutting-edge solutions</strong>{" "}
                that drive innovation and long-term value across diverse industries.
              </p>
            </li>

            <li>
              <span className={styles.dot1} />
              <p>
                <strong>
                  Expertise in Healthcare, Education, Agriculture & Life Sciences,
                </strong>{" "}
                enabling technology-led transformation for a sustainable future.
              </p>
            </li>
          </ul>
        </div>


        <div className={styles.right1}>
          <div className={styles.imageGrid}>
            <img src="/health.jpg" alt="Grid Image 1" className={styles.imgLarge} />
            <img src="/Education.jpg" alt="Grid Image 2" className={styles.imgSmallTop} />
            <img src="/agriculture.jpg" alt="Grid Image 3" className={styles.imgSmallBottom} />
          </div>
        </div>

      </section>

      <section className={styles.wrapper2}>

        <Row className={styles.topSection2}>

          <Col xs={24} md={10} className={styles.leftPanel2}>
            <Title level={1} className={styles.leftTitle2}>
              Are you Looking <br /> for a tech <br /> Partner?
            </Title>
            <Paragraph className={styles.leftDesc2}>
              The right tech partner must tick off all the check boxes.
            </Paragraph>
          </Col>

          <Col xs={24} md={14} className={styles.rightPanel2}>
            {[
              {
                bold: 'Innovation-driven approach',
                text: 'to deliver transformative solutions that impact businesses and society positively.',
              },
              {
                bold: 'Domain expertise across sectors',
                text: 'including Healthcare, Education, Agriculture & Life Sciences, ensuring relevant and practical solutions.',
              },
              {
                bold: 'Sustainable development focus:',
                text: ' designing solutions that are environmentally responsible and future-ready.',
              },
              {
                bold: 'Strategic technology partner',
                text: 'capable of guiding startups and enterprises from idea conceptualization to scalable implementation.',
              },
            ].map((item, index) => (
              <div key={index} className={styles.checkItem2}>
                <span className={styles.checkIcon2}>
                  <CheckOutlined />
                </span>
                <Paragraph className={styles.checkText2}>
                  <Text strong>{item.bold}</Text> {item.text}
                </Paragraph>
              </div>
            ))}
          </Col>
        </Row>

      </section>

      <section className={styles.wrapper3}>

        <div className={styles.left3}>
          <h1>
            We are  <span>experts</span>
            <br />
            In Software
            <br />
            development
            <br />
            for Startups.

          </h1>

          <div className={styles.leftImages3}>

            <div className={`${styles.leftImage3} ${styles.imgOne3}`}>
              <img src="/startup.jpg" alt="Image 1" />
            </div>

            <div className={`${styles.leftImage3} ${styles.imgTwo3}`}>
              <img src="/startup1.jpg" alt="Image 2" />
            </div>

            <div className={`${styles.leftImage3} ${styles.imgThree3}`}>
              <img src="/startup2.jpg" alt="Image 3" />
            </div>

            <div className={`${styles.leftImage3} ${styles.imgFour3}`}>
              <img src="/startup3.jpg" alt="Image 4" />
            </div>
          </div>


        </div>

        <div className={styles.right3}>
          <div className={styles.item3}>
            <span className={styles.number3}>01</span>
            <div>
              <h3>Innovative Solutions</h3>
              <p>
                <span>Developing cutting-edge technologies</span> that drive
                sustainability across Healthcare, Education, Agriculture, and Life
                Sciences, helping ventures achieve long-term impact.
              </p>
            </div>
          </div>

          <div className={styles.item3}>
            <span className={styles.number3}>02</span>
            <div>
              <h3>Expert Team</h3>
              <p>
                Our <span>diverse team of engineers and researchers</span> brings
                expertise from top institutions and global experience to create
                scalable, eco-conscious solutions in multiple sectors.
              </p>
            </div>
          </div>

          <div className={styles.item3}>
            <span className={styles.number3}>03</span>
            <div>
              <h3>Trusted by Innovators</h3>
              <p>
                <span>Our partners and clients rely on us</span> for developing
                sustainable technology solutions that align with their mission and
                values, ensuring measurable impact in critical domains.
              </p>
            </div>
          </div>

          <div className={styles.item3}>
            <span className={styles.number3}>04</span>
            <div>
              <h3>Cross-Sector Impact</h3>
              <p>
                From Healthcare and Education to Agriculture and Life Sciences,
                <span>our solutions foster innovation</span> while addressing
                environmental and social challenges effectively.
              </p>
            </div>
          </div>

          <div className={styles.item3}>
            <span className={styles.number3}>05</span>
            <div>
              <h3>Long-Term Partnerships</h3>
              <p>
                We focus on <span>sustainable collaborations</span> with clients
                and partners, ensuring continuous innovation and shared growth over
                time.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section className={styles.wrapper4}>
        <div className={styles.header4}>
          <Title level={1} className={styles.title4}>
            Pioneering{" "}
            <span className={styles.highlight4}>sustainable technology</span>
            <br />
            for impactful ventures
          </Title>

          <Paragraph className={styles.para4}>
            We deliver cutting-edge solutions in Healthcare, Education, Agriculture,
            and Life Sciences, helping startups leverage technology for meaningful
            impact.
          </Paragraph>
        </div>

        <div className={styles.timeline4}>
          <div className={styles.stage4}>
            <div className={styles.funding4}>Concept</div>

            <Card className={styles.card4}>
              <ul>
                <li>Ideation & feasibility</li>
                <li>Define sustainability goals</li>
                <li>Prototype minimal solution</li>
              </ul>
            </Card>

            <div className={styles.milestone4}>Validated idea</div>
          </div>

          <div className={styles.stage4}>
            <div className={styles.funding4}>Pilot</div>

            <Card className={styles.card4}>
              <ul>
                <li>Develop full prototype</li>
                <li>Test with early users</li>
                <li>Refine based on feedback</li>
              </ul>
            </Card>

            <div className={styles.milestone4}>
              First successful deployment
            </div>
          </div>

          <div className={styles.stage4}>
            <div className={styles.funding4}>Scale</div>

            <Card className={styles.card4}>
              <ul>
                <li>Optimize solutions for larger reach</li>
                <li>Integrate advanced technologies</li>
                <li>Enhance operational efficiency</li>
              </ul>
            </Card>

            <div className={styles.milestone4}>Broader impact achieved</div>
          </div>

          <div className={styles.stage4}>
            <div className={styles.funding4}>Expansion / Exit</div>

            <Card className={styles.card4}>
              <ul>
                <li>Launch new products & services</li>
                <li>Enter new regions and markets</li>
                <li>Adopt breakthrough sustainable</li>
              </ul>
            </Card>

            <div className={styles.milestone4}>Global recognition</div>
          </div>
        </div>
      </section>

      <section className={styles.wrapper5}>
        <div className={styles.left5}>
          <h1>
            How We Can
            <br />
            Help?
          </h1>

          <div className={styles.imagesWrap5}>
            <img src="/how.jpeg" alt="How we help" />
          </div>
        </div>

        <div className={styles.right5}>
          <div className={styles.item5}>
            <DesktopOutlined className={styles.icon5} />
            <div>
              <h3>MVP Development</h3>
              <p>
                We take your idea from concept to MVP by identifying core features,
                selecting the right technology stack, and crafting intuitive UI/UX.
                The result is a market-ready product validated with real users.
              </p>
            </div>
          </div>

          <div className={styles.item5}>
            <RiseOutlined className={styles.icon5} />
            <div>
              <h3>Building Scalable Products</h3>
              <p>
                Our engineers design scalable, future-ready architectures that
                minimize technical debt and ensure your product can grow reliably
                alongside your business.
              </p>
            </div>
          </div>

          <div className={styles.item5}>
            <ThunderboltOutlined className={styles.icon5} />
            <div>
              <h3>Faster Feature Roll-outs</h3>
              <p>
                We streamline feature delivery by grooming user stories, developing
                efficiently, and deploying seamlessly—while tracking real user
                feedback for continuous improvement.
              </p>
            </div>
          </div>

          <div className={styles.item5}>
            <ExperimentOutlined className={styles.icon5} />
            <div>
              <h3>Purpose-Driven Innovation</h3>
              <p>
                As a sustainable technology company, we build impactful solutions for
                Healthcare, Education, Agriculture, and Life Sciences—focusing on
                long-term value and real-world outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.wrapper6}>

        <div className={styles.left6}>
          <h1>
            Customers
            <br />
            Speaks
          </h1>
        </div>


        <div className={styles.right6}>
          {testimonials.map((item, index) => (
            <div className={styles.card6} key={index}>


              <div className={styles.videoBox6}>
                <img src={item.image} alt={item.name} />

              </div>


              <div className={styles.profile6}>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>

              <p className={styles.quote6}>“{item.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.wrapper7}>

        <div className={styles.left7}>
          <h1>
            Meet Our
            <br />
            Startup
            <br />
            Experts
          </h1>
        </div>


        <div className={styles.right7}>
          <Row gutter={[32, 32]}>
            {team.map((member, index) => (
              <Col key={index} xs={24} sm={12} lg={8}>
                <Card       
                  className={styles.card7}
                  cover={
                    <img
                      alt={member.name}
                      src={member.img}
                      className={styles.image7}
                    />
                  }
                >
                  <div className={styles.cardText7}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>


      </section>

      <section className={styles.wrapper8}>

        <div className={styles.leftShape8} />

        <div className={styles.content8}>
          <h1>
            Book a free consultation call with <br />
            Pragmatiq Systems?
          </h1>
          <p>Free consultation call.</p>
        </div>


        <div className={styles.cta8}>
          <Link href="/contact">
            <button className={styles.button8}>
              Book an appointment
            </button>
          </Link>

        </div>

        <div className={styles.rightShape8} />

      </section>

      <section className={styles.wrapper9}>
        <h1 className={styles.title9}>FAQs</h1>

        <div className={styles.faqList9}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.questionRow9}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.dot9} />
                <h3 className={styles.question9}>{item.question}</h3>
                <span
                  className={`${styles.arrow9} ${openIndex === index ? styles.rotate : ""
                    }`}
                >
                  ▼
                </span>
              </div>

              {openIndex === index && (
                <p className={styles.answer9}>{item.answer}</p>
              )}

              <div className={styles.divider9} />
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
        <li><Link href="/healthcare">Healthcare</Link></li>
        <li><Link href="/about">Education</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/events">Events</Link></li>
      </ul>
    </div>

    <div className={styles.col10}>
      <h4>Services</h4>
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Marketing Research</li>
        <li>Testing</li>
        <li>Mobile Application</li>
      </ul>
    </div>

    <div className={styles.col10}>
      <h4>Office Address</h4>
      <p>
        3rd Floor, Neelagiri Complex, Plot No. 36-C & 43-C, Raghavendra Nagar Colony, Kondapur, Serilingampally, Telangana 500084, India
      </p>
    </div>

  </div>

 
</footer>


    </>
  );


}




