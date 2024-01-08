import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./CaseStudy.module.css";
import Link from "next/link";
import { useRouter } from 'next/router';
import caseStudies from './caseStudies.json';

const CaseStudy = () => {

  const {query} = useRouter();
  console.log('hi query', typeof(query.id))

  const caseStudyData = caseStudies.find(obj => obj.id === parseInt(query.id));


  return (
    <Layout>
      <PageBanner pageName={"Case Study"} />
        <Row>
          <Col>
            <h2 className={styles.caseStudyTitle}>{caseStudyData?.title}</h2>
            <p className={styles.caseStudyDescription}>{caseStudyData?.description}</p>
          </Col>
        </Row>
        {caseStudyData?.sections.map((section, index) => (
          <Row key={index} className="mb-100">
            <Col lg={12}>
              <div className={styles.sectionTitle}><h6 className={styles.sectionTitleName}>{section.sectionTitle}</h6></div>
              <div className={styles.sectionContentDiv}><h6 className={styles.sectionContent}>{section.content}</h6></div>
            </Col>
          </Row>
        ))}
    </Layout>
  );
};

export default CaseStudy;