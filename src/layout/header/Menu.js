import Link from "next/link";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";

const Menu = ({ whiteLogo }) => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu whiteLogo={whiteLogo} />
    </Fragment>
  );
};

const MobileMenu = ({ whiteLogo }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src={whiteLogo ? '/assets/images/logos/logowhite.png' : '/assets/images/logos/cloudpro.png'}
                alt="Logo"
                title="Logo"
                style={{ maxHeight: '123px', maxWidth: '123px' }}
              />
            </Link>
          </div>

          {/* <div style={{
            marginLeft: '50%', whiteSpace: 'nowrap', paddingRight: '3%', color: 'red',
            marginTop: '1%'
          }} className="mobile-title">
            <h4>CLOUD PRO AI</h4>
          </div> */}




          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="/" onClick={() => active("services")}>
                CLOUD PRO AI
              </a>
            </li>

            <li className="dropdown">
              <a href="/services" onClick={() => active("services")}>
                SERVICES
              </a>
              <ul>
                <li>
                  <Link href="/services/generativeaiandml">
                    Generative AI And ML
                  </Link>
                </li>
                <li>
                  <Link href="/services/cloudengineering">Cloud Engineering </Link>
                </li>
                <li>
                  <Link href="/services/dataengineering">Data Engineering</Link>
                </li>
                <li>
                  <Link href="/services/bianddataanalytics">BI And Data Analytics</Link>
                </li>
                <li>
                  <Link href="/services/webappdevelopment">Web App Development </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="/industries" onClick={() => active("industries")}>
                INDUSTRIES
              </a>
              <ul style={activeSubMenu("industries")}>

                <li>
                  <Link href="/industries/media-entertainment-gaming">Media, Entertainment And Gaming</Link>
                </li>
                <li>
                  <Link href="/industries/real-estate">Real Estate</Link>
                </li>
                <li>
                  <Link href="/industries/financial">Financial</Link>
                </li>
                <li>
                  <Link href="/industries/healthcare">Healthcare</Link>
                </li>
                <li>
                  <Link href="/industries/education">Education</Link>
                </li>
                <li>
                  <Link href="/industries/manufacturing">Manufacturing</Link>
                </li>
                <li>
                  <Link href="/industries/alternative-investment">Alternative Investment</Link>
                </li>
                <li>
                  <Link href="/industries/insurance">Insurance</Link>
                </li>
                <li>
                  <Link href="/industries/security">Security</Link>
                </li>

              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("industries")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="/contact" onClick={() => active("contact")}>
                CONTACT
              </a>
            </li>





            <li className="dropdown">
              <a href="/about" onClick={() => active("about")}>
                ABOUT
              </a>
              <ul style={activeSubMenu("about")}>
                <li>
                  <Link href="/about">About us</Link>
                </li>

                <li>
                  <Link href="/contact">Contact us</Link>
                </li>


              </ul>
              <div
                className="dropdown-btn"
                onClick={() => active("about")}
              >
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(window.origin + "/api/services/generativeaiandml/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [cloudServices, setCloudServices] = useState([]);

  useEffect(() => {

    fetch(window.origin + "/api/services/cloudengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setCloudServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [dataEngineeringServices, setDataEngineeringServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/dataengineering/services")
      .then((response) => response.json())
      .then((parsed) => {
        setDataEngineeringServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [biDataServices, setBiDataServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/bianddataanalytics/services")
      .then((response) => response.json())
      .then((parsed) => {
        setBiDataServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const [webAppServices, setWebAppServices] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/services/webappdevelopment/services")
      .then((response) => response.json())
      .then((parsed) => {
        setWebAppServices(parsed);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/cloudpro.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li>
            <a href="/">CLOUD PRO AI</a>
          </li>
          <li className="dropdown">
            <a href="/services">SERVICES</a>
            <ul>
              <li className="dropdown">
                <Link href="/services/generativeaiandml">
                  Generative AI And ML
                </Link>
                <ul>
                  {services.map(service =>
                    <li key={service.slug}><Link href={`/services/generativeaiandml/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/services/cloudengineering">Cloud Engineering </Link>
                <ul>
                  {cloudServices.map(service =>
                    <li key={service.slug}><Link href={`/services/cloudengineering/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/services/dataengineering">Data Engineering</Link>
                <ul>
                  {dataEngineeringServices.map(service =>
                    <li key={service.slug}><Link href={`/services/dataengineering/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/services/bianddataanalytics">BI And Data Analytics</Link>
                <ul>
                  {biDataServices .map(service =>
                    <li key={service.slug}><Link href={`/services/bianddataanalytics/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
              </li>
              <li className="dropdown">
                <Link href="/services/webappdevelopment">WebApp Development </Link>
                <ul>
                  {webAppServices .map(service =>
                    <li key={service.slug}><Link href={`/services/webappdevelopment/${service.slug}`}>{service.title}</Link></li>)}
                </ul>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/industries">INDUSTRIES</a>
            <ul>

              <li>
                <Link href="/industries/media-entertainment-gaming">Media, Entertainment And Gaming</Link>
              </li>
              <li>
                <Link href="/industries/real-estate">Real Estate</Link>
              </li>
              <li>
                <Link href="/industries/alternative-investment">Alternative Investment</Link>

              </li>
              <li>
                <Link href="/industries/financial">Financial</Link>
              </li>
              <li>
                <Link href="/industries/healthcare">Healthcare</Link>
              </li>
              <li>
                <Link href="/industries/education">Education</Link>
              </li>
              <li>
                <Link href="/industries/manufacturing">Manufacturing</Link>
              </li>
              <li>
                <Link href="/industries/insurance">Insurance</Link>
              </li>
              <li>
                <Link href="/industries/security">Security</Link>
              </li>

            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/contact">CONTACT</a>


          </li>
          <li className="dropdown">
            <a href="/about">ABOUT US</a>
            <ul>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>

              <li>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
