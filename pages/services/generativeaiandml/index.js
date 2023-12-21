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

    fetch(window.origin + "/api/services/generativeaiandml/services")
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
      <PageBanner pageName={"Generative AI And ML"} />
      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Generative AI and Machine Learning Services</h2>
                </div>
                <p>
                  Unlock the Power of Intelligent Creation with CloudPro AI In
                  the era of data-driven innovation, Generative Artificial
                  Intelligence (AI) and Machine Learning (ML) stand at the
                  forefront of transformative technologies. CloudPro AI is your
                  strategic partner in harnessing the full potential of
                  Generative AI and ML to revolutionize the way you approach
                  problem-solving, creativity, and decision-making.
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="/assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>What is Generative AI and ML?</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Creativity Enhancement</li>
                      <li>Efficiency and Automation</li>
                      <li>Data-Driven Decision Making</li>
                      <li>Personalization</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Generative AI refers to systems that have the capacity to
                      autonomously create content, whether it be text, images,
                      videos, or other forms of data. Unlike traditional AI
                      models that operate based on predefined rules, generative
                      models utilize advanced algorithms and neural networks to
                      generate content that is contextually relevant and often
                      indistinguishable from content created by humans. One of
                      the hallmark applications of generative AI is in natural
                      language processing, where models can generate coherent
                      and contextually appropriate text. This has transformative
                      implications for content creation, creative writing, and
                      even dialogue generation.
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
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit au fugit sed quia consequun tur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque quisquam est, qui
                  dolorem epsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora sncidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  {/* <JeenaAccordion2 accordionsData={accordionData} /> */}
                </div>
              </div>
              <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                <h3>Why Cloud Pro AI for Generative AI And ML Services?</h3>
              </div>
              <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                <ul className="list-style-one">
                  <li>Expertise: </li>
                  <li>Scalability</li>
                  <li>Security</li>
                  <li>Innovation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    {services.map((service, index) => (
                      <div key={index}>
                        <li>
                          <Link
                            href={`/services/generativeaiandml/${service.slug}`}
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
                    <i className="fas fa-phone" /> +1 415-393-2021
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
                  <Link legacyBehavior href="/services/dataengineering">
                    Data Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/services/dataengineering">
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
                  <Link legacyBehavior href="services/cloudengineering">
                    Cloud Engineering
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
