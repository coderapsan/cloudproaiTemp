import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";

export default function Technology() {
    return (
        <Layout>
            <section className="price-plan-page-middle bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1 technology">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://courtevillegroup.com/blog/wp-content/uploads/2023/03/OPT-2-medium-shot-man-wearing-vr-glasses-scaled-1.jpg"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="technologyCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="">
                                            <span className="sub-title mb-15">Technology Cloud</span>
                                        </Link>
                                        <h2>Empowering Tech with AI Cloud</h2>
                                    </div>
                                    <p>
                                        Revolutionize technology infrastructure with Cloud Pro AI. Our AI-powered 
                                        cloud solutions drive innovation, scalability, and efficiency in tech operations.
                                    </p>
                                    <Link href="/services/technologycloud">
                                        <span className="sub-title mb-15">
                                            Discover More Technology Cloud Services
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Tab.Container>
                </div>
            </section>
        </Layout>
    );
}
