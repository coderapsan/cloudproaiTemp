import Link from "next/link";
import Search from "../Search";
import Menu from "./Menu";

const Header1 = () => {
  return (
    <header className="main-header header-one menu-white">
      <div className="header-top-wrap bgc-gray">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="far fa-envelope" />{" "}
                <a href="mailto:contact@cloudpro.com">
                  {" "}
                  contact@cloudproai.com
                </a>
              </li>
              <li>
                <i className="far fa-phone" />{" "}
                <a href="callto:+000(123)45688">+1 415-393-2021</a>
              </li>
              <li className="for-none">
                <i className="far fa-clock" /> Working Hours : Monday- Friday 
                10 am to 5pm
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper bgc-black">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      className="navBarLogo"
                      src="/assets/images/logos/cloudpro.png"
                      alt="Logo"
                      title="Logo"
                      height={75}
                      width={75}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-10">
              <Search />
            </div>
           
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default Header1;
