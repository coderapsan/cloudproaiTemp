// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// const Index = () => {
//   const [services, setServices] = useState([]);
//   console.log("services", services)

//   useEffect(() => {
//     console.log("useEffect is running ");

//     fetch(window.origin +"/api/services/dataengineering/services")
//       .then((response) => response.json())
//       .then((parsed) => {
//         setServices(parsed);
//       })
//       .catch((error) => {
//         console.error("Error fetching services:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Data Engineering Landing Page</h2>
//       {services && services.map((service) => (
//         <div key={service.slug}>
//           <Link href={`/services/dataengineering/${service.slug}`}>
//             <h3>{service.title}</h3>
//           </Link>

//           <p>{service.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Index;

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

    fetch(window.origin + "/api/services/dataengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    // <div>
    //   <h2>Data Engineering Landing Page</h2>
    //   {services.map((service) => (
    //     <div key={service.slug}>
    //       <Link href={`/services/cloudengineering/${service.slug}`}>
    //         <h3>{service.title}</h3>
    //       </Link>

    //       <p>{service.description}</p>
    //     </div>
    //   ))}
    // </div>
    <Layout>
      <PageBanner pageName={"Data Engineering"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>
                    The Crucial Role of Data Engineering in Modern Business
                  </h2>
                </div>
                <p>
                  In the rapidly evolving landscape of technology and business,
                  the importance of effective data management cannot be
                  overstated. As organizations grapple with massive amounts of
                  data generated every second, the role of data engineering has
                  become pivotal in ensuring that this data is not just
                  collected but transformed into actionable insights. In this
                  article, we delve into the world of data engineering and its
                  significance in modern business operations.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What is Data Engineering?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research &amp; Planning</li>
                      <li>Wireframing &amp; Prototyping</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Data engineering is a multidisciplinary field that
                      involves designing, developing, and managing the
                      architecture that allows organizations to process and
                      analyze vast amounts of data. It encompasses a variety of
                      tasks, including data collection, data transformation,
                      data storage, and data retrieval. The ultimate goal of
                      data engineering is to provide a solid foundation for data
                      scientists and analysts to derive meaningful insights from
                      raw data.
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
                <h3>Why Choose CloudPro AI?</h3>
                <h4>Expertise</h4>
                <p>
                  Our team consists of seasoned data engineers with a deep
                  understanding of the latest technologies and best practices in
                  data engineering.
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
                            href={`/services/cloudengineering/${service.slug}`}
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
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+000(123)45688" className="number">
                    <i className="fas fa-phone" /> +000 (123) 456 88
                  </a>
                  <img
                    className="bg-shape"
                    src="/assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
                <div className="widget widget-download wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Download pdf <i className="far fa-file-pdf" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Download doc <i className="far fa-file-word" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                <Link legacyBehavior href="/services/genrativeaiandml">
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
