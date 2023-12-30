import { Tab } from "react-bootstrap";
import Link from "next/link";
import Layout from "@/layout";

export default function Insurance() {
    return (
        <Layout>
            <section className="price-plan-page-middle bgc-lighter pt-130 rpt-100 pb-100 rpb-70 rel z-1">
                <div className="price-page-shapes">
                    <img
                        className="shape two"
                        src="https://prod-sitefinity-library.kappro.com/images/default-source/career-corner/starting-career/insurance-producer_16.jpg?sfvrsn=d94c9803_5"
                        alt="Shape"
                    />
                </div>
                <div className="container">
                    <Tab.Container defaultActiveKey="insuranceCloud">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-10">
                                <div className="pricing-tab-wrap mt-75 wow fadeInUp delay-0-2s">
                                    <div className="section-title mb-25">
                                        <Link href="/services/insurancecloud">
                                            <span className="sub-title mb-15">Insurance Cloud</span>
                                        </Link>
                                        <h2>Revolutionizing Insurance with AI Cloud</h2>
                                    </div>
                                    <p>
                                        Enter the future of insurance with Cloud Pro AI. Our cloud solutions powered by AI 
                                        redefine insurance management, enabling real-time insights, efficient processes, 
                                        and strategic decision-making.
                                    </p>
                                    <Link href="/services/insurancecloud">
                                        <span className="sub-title mb-15">
                                            Discover More Insurance Cloud Services
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