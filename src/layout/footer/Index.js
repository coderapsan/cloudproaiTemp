import Link from "next/link";
import Data from "../../jsonData/services.json";

const Footer = () => {
  return (
    <footer className="main-footer bgc-gray footer-white rel z-1">
      <div className="footer-cta-wrap">
        <div className="container">
          <div
            className="footer-cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/footer/footer-cta-bg.jpg)",
            }}
          >
            <div className="section-title wow fadeInLeft delay-0-2s">
              <span className="sub-title">Need Any Consultations ?</span>
              <h2>We’re Ready to Growth IT Business</h2>
            </div>
            <Link legacyBehavior href="/contact">
              <a className="theme-btn style-three wow fadeInRight delay-0-2s">
              Want a Pro?
              <br/>
              Schedule a Free Consultation <i className="fas fa-long-arrow-right" />
              </a>
            </Link>
            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-phone" />
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:+000(123)45688">+1 415-393-2021</a>
              </div>
            </div>
           
       

            <div className="hotline wow fadeInRight delay-0-2s">
              <i className="fas fa-envelope"/>
              <div className="content">
                <span>Email</span>
                <br />
                <a href="mailto:contact@cloudproai.com">contact@cloudproai.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row medium-gap">
          <div className="col-xl-3 col-sm-6">
            <div className="footer-widget widget_about wow fadeInUp delay-0-2s">
              {/* <div className="footer-logo mb-30"> */}
                <Link legacyBehavior href="/">
                  <a>
                    <img  src="/assets/images/logos/cloudpro.png" alt="Logo" />
                  </a>
                </Link>
              {/* </div> */}
              <p>
               Cloud Pro AI: Cloud Services Consultant
              </p>
              <Link legacyBehavior href="/about">
                <a className="read-more">
                  Learn More Us <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 order-xl-2">
            <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
              <h4 className="footer-title">Newsletter</h4>
              <p>
                Newsletter Features will be updated soon 👍👍 Get connected with us 
              </p>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="contact@cloudproai.com"
                  required
                />
                <button>Sign Up</button>
              </form>
              <h5>Follow Us</h5>
              <div className="social-style-one">
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
          <div className="col-xl-6">
            <div className="row">
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-3s">
                  <h4 className="footer-title">Quick Links</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link
                        legacyBehavior
                        href="404"
                      > Security and Complianace </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">Updates and Release Notes</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="services"
                      >Our Services </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="project-grid"
                      >Models</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="404"
                      >Frequently Asked Questions</Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="404"
                      >  Feedback And Suggestions  </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact">{`Contact us`}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
                  <h4 className="footer-title">Services</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="404">
                        <a>Data Analytics & Engineering</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a>AI Chatbots</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="404">
                        <a>Data Services Best Practices on Cloud</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link legacyBehavior href="404">
                        <a>Serverless Architecture</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a>End to End Data Pipeline Solutions"</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Data Lakes and Warehouses</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="service-details">
                        <a>Cloud Services Operations And Maintainance</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-6 col-small">
                <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s">
                  <h4 className="footer-title">Resources</h4>
                  <ul className="list-style-two">
                    <li>
                      <Link legacyBehavior href="404">
                        <a>Case Studies </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link legacyBehavior href="404">
                        Brief Solutions
                      </Link>
                    </li> */}
                    <li>
                      <Link legacyBehavior href="404">
                        <a>Blogs and Posts</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a>Whitepapers</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        <a> Podcasts</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="404">
                        Events
                        
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-5s */}
                  <h4 className="footer-title">Solutions</h4>
                  <ul className="list-style-two">
                  <li>
                      <Link legacyBehavior href="404">
                        <a>Data Cost Optimizer </a>
                      </Link>
                    </li><li>
                      <Link legacyBehavior href="404">
                        <a>Data & AI Lab </a>
                      </Link>
                    </li>
                  </ul>
                  {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom bgc-black mt-20 pt-20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="footer-bottom-menu mb-10 wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <a href="#">Buy Template</a>
                  </li>
                  <li>
                    <a href="#">Version 1.2</a>
                  </li>
                  <li>
                    <a href="#">Image Licenses</a>
                  </li>
                  <li>
                    <a href="#">Instructions</a>
                  </li>
                  <li>
                    <a href="#">Visit My Templates</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="copyright-text text-lg-end wow fadeInLeft delay-0-2s">
                <p>© 2023 Jeena. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-shapes">
        <img
          className="shape one"
          src="assets/images/footer/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="assets/images/footer/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s"
          src="assets/images/footer/footer-right.png"
          alt="Shape"
        />
      </div> */}
    </footer>
  );
};
export default Footer;
