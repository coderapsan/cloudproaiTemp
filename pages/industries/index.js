
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from './Industries.module.css';

const Industries = () => {
  return (
    <Layout>
      <PageBanner pageName={"Industries"} />
      <section className={styles.industrySection}>
        <Container>
          <h2 className={styles.industryHeading}>Explore Industries</h2>
          <Row className={styles.industryOptions}>
            {industries.map((industry) => (
              <Col lg={4} md={6}key={industry.name}>
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
