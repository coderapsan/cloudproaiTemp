import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
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
                src="/assets/images/logos/cloudpro.png"
                alt="Logo"
                title="Logo"
                
              />
            </Link>
           
            
          </div> 
          <div style={{ marginLeft: '200px', color: 'red' }} className="mobile-title">
  <h4>CLOUD PRO AI</h4>
</div>

            
          
          
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
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link href="/services/generativeaiandml">Generative AI and ML</Link>
                </li>
                <li>
                  <Link href="/services/cloudengineering">Cloud Engineering</Link>
                </li>
                <li>
                  <Link href="/services/dataengineering">Data Engineering</Link>
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
                  <Link href="/industries/media">Media</Link>
                </li>
                <li>
                  <Link href="/industries/entertainment-and-gaming">Entertainment And Gaming</Link>
                </li>
                <li>
                  <Link href="/industries/real-estate">Real Estate</Link>
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
                  <Link href="/about/aboutus">About us</Link>
                </li>
                <li>
                  <Link href="/about/our-partners">Our Partners</Link>
                </li>
                <li>
                  <Link href="/about/our-team">Our Team</Link>
                </li>
                <li>
                  <Link href="/about/contact">Contact</Link>
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
              <li>
                <Link href="/services/generativeaiandml">
                  GENERATIVE AI AND ML
                </Link>
              </li>
              <li>
                <Link href="/services/cloudengineering">CLOUD ENGINEERING</Link>
              </li>
              <li>
                <Link href="/services/dataengineering">DATA ENGINEERING</Link>
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
                  <Link href="/industries/media">Media</Link>
                </li>
                <li>
                  <Link href="/industries/entertainment-and-gaming">Entertainment And Gaming</Link>
                </li>
                <li>
                  <Link href="/industries/real-estate">Real Estate</Link>
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
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/contact">CONTACT</a>

            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>
          <li className="dropdown">
            <a href="/about">ABOUT US</a>
            <ul>
              <li>
                <Link href="/about">ABOUT US</Link>
              </li>
              <li>
                <Link href="index2">OUR TEAM</Link>
              </li>
              <li>
                <Link href="index3">CAREERS</Link>
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
