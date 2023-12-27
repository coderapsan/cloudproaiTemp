import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
import Data from "../src/jsonData/services.json";
import Partner from "@/src/components/Partner";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h1>Cloud Pro AI: Cloud Services Consultant </h1>
                <p>
                  In the vast realm of cloud technology, CloudProAI emerges as a
                  beacon of efficiency, offering bespoke services that propel
                  businesses into the future
                </p>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                  <img
                    className="shape one"
                    src="/assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="/assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="/assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="hero-images mt-80 wow fadeInLeft">
                <img src="/assets/images/hero/hero-one.jpg" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="/assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          <img
            className="shape right-shape wow fadeInRight delay-0-8s"
            src="/assets/images/shapes/hero-right-shape.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Partners Area start */}
      <section className="partners-area mt-60 pt-150 pb-100 rmt-30 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Global Partners</span>
            <h2>Our Esteemed Partners - Guiding the Journey to Success</h2>
            <p>
              At Cloud Pro AI, we take pride in fostering meaningful and
              enduring partnerships. Our collaborative network consists of
              industry leaders, innovators, and visionaries who share our
              commitment to excellence. Together, we navigate the dynamic realms
              of technology, pooling our expertise and resources to create
              synergies that drive success. Our partners play a pivotal role in
              shaping the future, and we are privileged to embark on this
              transformative journey together
            </p>

          
            </div>
          </div>
          <Partner/>
      </section>
      {/* Partners Area end */}
      {/* About Area start */}
      <section className="about-area pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Small Enough to Care Big Enough to Success</h2>
                </div>
                <p>
                  Cloud Pro AI - Where innovation meets precision. We believe in
                  being small enough to provide personalized attention to each
                  client, ensuring their unique needs are met with precision.
                  Yet, we stand tall with a wealth of expertise, empowering
                  businesses to reach new heights through cutting-edge cloud
                  solutions. With Cloud Pro AI, success is not just a goal; it's
                  a commitment we keep to make your journey to the cloud
                  seamless and triumphant.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+000(123)45688">++1 415-393-2021</a>
                    </div>
                  </div>
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Cloud Consulting
                        </Link>
                      </h4>
                      <p>
                        Unleashing Possibilities, Empowering Growth. In the
                        dynamic realm of digital evolution, cloud consulting
                        stands as a beacon.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="/assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Generative AI and ML
                        </Link>
                      </h4>
                      <p>
                        Pioneering the Future of Intelligent Creativity.
                        Harnessing the extraordinary capabilities of Generative
                        AI and Machine Learning,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="/assets/images/about/about1(1).jpg"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="/assets/images/about/about-logo.png"
                    alt="About"
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="/assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="/assets/images/about/about2.jpg"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best Cloud Services</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                

                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cloud Architecture Consulting
                    </Link>
                  </h4>
                  <p>
                    Cloud Architecture Consulting at Cloud Pro AI involves
                    providing expert guidance and strategic planning for
                    designing, implementing, and optimizing cloud-based
                    solutions. Our consultants work closely with clients to
                    assess their unique requirements, recommend suitable cloud
                    architectures, and ensure alignment with business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cost Optimization for Cloud Infrastructure
                    </Link>
                  </h4>
                  <p>
                    Cost Optimization for Cloud Infrastructure involves
                    analyzing and implementing strategies to efficiently manage
                    expenses related to cloud services. Cloud Pro AI offers
                    tailored solutions to optimize resource utilization,
                    leverage reserved capacity, and implement auto-scaling
                    mechanisms, ensuring clients achieve maximum performance at
                    minimal costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Information Governance
                    </Link>
                  </h4>
                  <p>
                    At Cloud Pro AI, our Information Governance service is
                    dedicated to ensuring data integrity, security, and
                    compliance. We implement comprehensive strategies and
                    frameworks to govern data throughout its lifecycle, covering
                    data quality, privacy, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Data Lakes and Warehouses
                    </Link>
                  </h4>
                  <p>
                    our Data Lakes and Warehouses service empowers businesses by
                    creating centralized repositories for diverse data types. We
                    design and implement robust data lakes and warehouses,
                    facilitating seamless data integration, analysis, and
                    retrieval.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Data Architecture
                    </Link>
                  </h4>
                  <p>
                    Cloud Pro AI's Data Architecture Service provides robust and
                    scalable solutions for organizing, managing, and optimizing
                    data structures. Our experts design architecture tailored to
                    your business needs, ensuring efficient data storage,
                    retrieval, and analytics to drive informed decision-making."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discovery And Assessment</h4>
                  <p>
                    We conduct a comprehensive assessment of your existing
                    infrastructure, applications, and workflows to identify
                    opportunities for improvement and optimization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Strategic Planning</h4>
                  <p>
                    We develop a tailored cloud strategy that aligns with your
                    business objectives. This includes selecting the right cloud
                    service models (IaaS, PaaS, SaaS).
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Implementation and Migration </h4>
                  <p>
                    With a detailed plan in place, we proceed to implement the
                    cloud solutions. This involves migrating applications, data,
                    and services to the cloud environment
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Optimization and Performance Tuning</h4>
                  <p>
                    Post-implementation, we continuously monitor the cloud
                    infrastructure to identify areas for optimization. This
                    includes fine-tuning configurations, scaling resources based
                    on demand,
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Continuous Improvement and Support:</h4>
                  <p>
                    Cloud Pro AI is committed to ongoing support and
                    improvement. We stay updated with the latest cloud
                    technologies and trends, providing proactive support,
                    managing updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    


<section className="team-area-two pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Nimesh Kuinkel</h4>
                <span className="designation">CEO & Founder</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Apsan Regmi</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="https://www.facebook.com/apsan.regmi/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fapsanregmi%3Ffbclid%3DIwAR1uPhOFaNP6QX5AUySco3CZLcsPlLzY8xCjEap8R1M0WGhKfuPrdBOMNhU&h=AT3afhdc1hWKTqtuMqzqrnEP3rHas-o622boJF531ZRndmINYn8rMGoZMubaNXOHM5sKq98ctMAcivwqTUO0ldJsEnw-naVWrbWunDxse7CiAPlZsT71kwmE2xTYtZSjwJL6ZVoqiW4zvc0N_IQk">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fapsan-regmi-b735a91bb%2F%3Ffbclid%3DIwAR2j3gdRMltDrq-sO0dA4dSVy3sG3B_c3AuM48rHQYjoZLVz3QhXiQJzB1I&h=AT2HWojt7AMW9XUS1J5l2wpJLyO76bftwVjsnSV2q7CP_klUYYxrcqY0bquxXbsQQIxB0FJsTeMKE7VziHZxTfVmOUXe9smtU263I2m4P3VcwitS3TcqiY01HUIheASgAKnp5S8FNZeOVpSBChKSkQ">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className="team-shapes">
          <img
            className="shape one"
            src="/assets/images/team/team-shape-one.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="/assets/images/team/team-shape-two.png"
            alt="Shape"
          />
        </div>
      </section>







            <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Experts Say About Business Use Cases</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  />
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </Layout>
  );
};
export default Index;
