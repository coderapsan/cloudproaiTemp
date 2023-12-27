import React from 'react'
import Link from 'next/link'

const Partner = () => {
  return (
    <div>
        <div className="partners-area-three text-center rel z-1 pb-110 rpb-80">
        <div className="container">
          <h5>
            Our developers and Partners has experience in delivering projects to
            top tier companies like:
          </h5>
          <hr className="mb-75" />
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="/assets/images/partners/all-state.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/https://www.americanexpress.com/">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="/assets/images/partners/american-express.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/https://www.autodesk.com/">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="/assets/images/partners/autodesk.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/https://www.bayalarm.com/">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="/assets/images/partners/bay-alarm.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img src="/assets/images/partners/csi.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="/assets/images/partners/eandjgallo.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img src="/assets/images/partners/hbo.png" alt="Partner" />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="/assets/images/partners/trinchero.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="/assets/images/partners/university-of-california.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="/assets/images/partners/veritas.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="/assets/images/partners/wells-fargo.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Partner
