import React, { useEffect, useState } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
// import Link from "next/link";
const Index = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/webappdevelopment/services")
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <Layout>
      <PageBanner pageName={"Services"} pageTitle={"Web App Develpoment"} />

      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Web App Development Services</h2>
                </div>
                <p>
                  In the ever-evolving digital landscape, web applications stand
                  as the cornerstone of innovation, offering dynamic and
                  interactive solutions that drive businesses forward. Web app
                  development services encompass a broad spectrum of expertise,
                  seamlessly blending technology, creativity, and functionality
                  to deliver bespoke solutions tailored to the unique needs of
                  businesses across industries.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What are Web App Development Services?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Customization and Innovation</li>
                      <li>User-Centric Design</li>
                      <li>Scalability and Performance</li>
                      <li>Data Quality Improvement</li>
                      <li>Comprehensive Services</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Web app development services involve the creation,
                      deployment, and maintenance of applications accessible via
                      web browsers. These services encompass a range of tasks,
                      including designing user interfaces, programming backend
                      functionality, integrating databases, and ensuring
                      seamless performance. Web app development focuses on
                      crafting interactive, scalable, and user-friendly
                      applications tailored to meet specific business needs.
                      Developers leverage technologies like HTML, CSS,
                      JavaScript, and various frameworks to create dynamic web
                      applications that enhance digital experiences.
                    </p>
                    <p>
                      The development process extends to backend programming,
                      where servers, databases, and application logic are
                      intricately woven together to ensure seamless
                      functionality. These services also include database
                      management, API integrations, and the implementation of
                      scalable architecture, enabling applications to grow with
                      the evolving needs of businesses. Quality assurance,
                      testing, and ongoing maintenance play pivotal roles,
                      guaranteeing the reliability, security, and optimal
                      performance of web applications. Strategic consulting is
                      often part of the service, guiding clients in aligning
                      their digital objectives with the broader goals of their
                      businesses. In essence, web app development services offer
                      a holistic approach to crafting tailored, user-centric
                      solutions that elevate online experiences and drive
                      business success.
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="/assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Service management is a comprehensive approach to planning,
                  designing, and delivering high-quality services to meet
                  organizational goals. It involves strategic considerations,
                  such as defining service goals aligned with business
                  objectives, and encompasses key stages like Service Strategy,
                  Service Design, Service Transition, Service Operation, and
                  Continual Service Improvement. Service management ensures
                  efficiency, customer satisfaction, and continual adaptation to
                  changing needs, making it an essential framework for
                  organizations aiming to deliver value through their services.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  {/* <JeenaAccordion2 accordionsData={accordionData} /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    {services.map((service) => (
                      <div key={service.slug}>
                        <li>
                          <Link
                            href={`/services/webappdevelopment/${service.slug}`}
                          >
                            {service.title}
                          </Link>
                        </li>

                        {/* <p>{service.description.slice(0.10)}</p> */}
                      </div>
                    ))}
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(/assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3 className="benefits" style={{ color: "white" }}>
                      Benefits
                    </h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Web app development offers businesses a global reach and
                      cross-platform compatibility, enabling users to access
                      applications from any device with an internet connection.
                      Cost-effective and easy to maintain, web apps allow for
                      rapid development and real-time updates without requiring
                      manual intervention from users. With scalability and
                      user-centric design, web apps provide a responsive and
                      engaging interface. 
                    </p>
                  </div>
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+000(123)45688" className="number">
                    <i className="fas fa-phone" /> +1 415-393-2021
                  </a>
                  <img
                    className="bg-shape"
                    src="/assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-area-six pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Understanding Data Engineering Services
                  </Link>
                </h4>
                <p>
                  Data Engineering Services involve the meticulous design,
                  development, and management of data architecture and
                  infrastructure to support an organization's data needs. This
                  includes data integration, processing, and storage solutions,
                  ensuring the availability and reliability of high-quality
                  data.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Key Components of Service Management
                  </Link>
                </h4>
                <p>
                  Service Management comprises key components that are essential
                  for delivering high-quality services. Service Strategy
                  involves defining the organization's service goals, ensuring
                  alignment with business objectives. Service Design focuses on
                  creating effective service solutions, considering technology,
                  processes, and people.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-mission-1" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Challenges and Solutions
                  </Link>
                </h4>
                <p>
                  Challenges in service management include issues like service
                  disruptions, inefficient processes, and difficulties adapting
                  to changing business needs. Solutions involve implementing
                  robust incident and problem management processes to swiftly
                  address disruptions. Streamlining service delivery processes
                  enhances efficiency.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Future Outlook
                  </Link>
                </h4>
                <p>
                  The future outlook for service management involves a continued
                  shift towards automation, AI integration, and enhanced user
                  experiences. Businesses are expected to leverage advanced
                  analytics for predictive insights, ensuring proactive problem
                  resolution. Cloud-based solutions will play a pivotal role in
                  facilitating flexibility and scalability. Emphasis on
                  cybersecurity measures will increase to address evolving
                  threats
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    Strategic Deployment of Cloud Services
                  </Link>
                </h4>
                <p>
                  Strategic deployment of cloud services involves the deliberate
                  and planned utilization of cloud computing resources to
                  achieve specific business objectives. This approach entails
                  aligning cloud solutions with organizational goals, optimizing
                  resource allocation, and ensuring scalability to accommodate
                  evolving needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-agile" />
                </div>
                <h4>
                  <Link legacyBehavior href="service-details">
                    The Evolution of Service Delivery
                  </Link>
                </h4>
                <p>
                  The integration of Generative AI and ML services marks a
                  significant evolution in service delivery mechanisms.
                  Traditional approaches are giving way to dynamic and adaptive
                  models that can learn, optimize, and enhance their performance
                  over time. Service management, in this context, involves
                  orchestrating these intelligent systems to deliver
                  unparalleled value to businesses and end-users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="menu-btns">
        <Link legacyBehavior href="/businesscases">
          <a className="theme-btn">
            Learn More About Business use cases
            <i className="fas fa-long-arrow-right" />
          </a>
        </Link>
      </div>

      {/* Service Details Area end */}
      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="/assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="/services/cloudengineering">
                    Cloud Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/cloudengineering">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/services">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="services/generativeaiandml">
                    Generative AI And ML
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/cloudengineering">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="/assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
