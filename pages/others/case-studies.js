import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from './caseStudies.module.css';

const Industries = () => {
  return (
    <Layout>
      <PageBanner pageName={"Case Studies "} />

      <section className={styles.industrySection}>
        <Container>
          <h6 className={styles.industryDescription}>
            Leading the way for international success,
            <br />
            we stand alongside top-tier organizations across diverse industries,
            <br />
            driving their digital engineering initiatives forward,
            <br />
            and ensuring they are equipped to meet any future demands.
          </h6>
          <Row className={styles.industryOptions}>
            {industries.map((industry) => (
              <Col lg={4} md={6} key={industry.name}>
                <Link href={industry.link}>
                  <div className={styles.industryLink}>
                    <div className={`${styles.industryImage} ${styles[industry.className]}`} />
                    <h3 className={styles.industryTitle}>{industry.name}</h3>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <div className={styles.professionalSection}>
          <div className={styles.textContainer}>
            <h6 className={styles.sectionText}>
              We empower our clients            with top-tier cloud and data practices,
              enabling them to concentrate
              on their core strengths
              without worrying about the path to success.
            </h6>
          </div>
          <div className={styles.imageContainer}>
            <img src="https://talkshop.ph/blog/wp-content/uploads/2014/06/Team-Silhouettee-with-Globe-1024x819.jpg" alt="Team Silhouette with Globe" className={styles.sectionImage} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;


const industries = [
  { name: 'Media, Entertainment & Gaming', link: '/industries/media-entertainment-gaming', className: 'media-entertainment-gaming' },
  { name: 'Real Estate', link: '/industries/real-state', className: 'real-state' },
  { name: 'Alternative Investment', link: '/industries/alternative-investment', className: 'alternative-investment' },
  { name: 'Financial', link: '/industries/financial', className: 'financial' },
  { name: 'Healthcare', link: '/industries/healthcare', className: 'healthcare' },
  { name: 'Education', link: '/industries/education', className: 'education' },
  { name: 'Manufacturing', link: '/industries/manufacturing', className: 'manufacturing' },
  { name: 'Insurance', link: '/industries/insurance', className: 'insurance' },
  { name: 'Security', link: '/industries/security', className: 'security' },
];
