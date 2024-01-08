import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CaseStudies.module.css";
import caseStudiesData from "./caseStudies.json";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <Layout>
      <PageBanner pageName={"Case Studies"} />
      <Container className={styles.container}>
        <h5 className={styles.caseStudiesHeading}>Case Studies</h5>
        <Row>
          {caseStudiesData.map((caseStudy) => (
            <Col key={caseStudy.title} lg={4} md={6}>
              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyImage}>
                  <h3 className={styles.cardTitle}>{caseStudy.title.length > 90 ? `${caseStudy.title.slice(0,90)}`+'...' : caseStudy.title}</h3>
                </div>
                <div className={styles.content}>
                  <p className={styles.description}>{caseStudy.description.length > 100 ? `${caseStudy.description.slice(0,100)}`+'...' : caseStudy.description}</p>
                  <Link href={`case-studies/${caseStudy.id}`} className={styles.learnMoreLink}>
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default CaseStudies;
