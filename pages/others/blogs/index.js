import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Blogs.module.css";
import Link from "next/link";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    console.log("useEffect is running ");

    fetch(window.origin + "/api/blogs/blogs")
      .then((response) => response.json())
      .then((parsed) => {
        setBlogsData(parsed);
      })
      .catch((error) => {
        console.error("Error fetching Blogs:", error);
      });
  }, []);

  return (
    <Layout>
      <PageBanner pageName={"Blogposts"} />
      <Container className={styles.container}>
        <h5 className={styles.caseStudiesHeading}>Blogposts</h5>
        <Row>
          {blogsData.map((blog) => (
            <Col key={blog.title} lg={4} md={6}>
              <div className={styles.caseStudyCard}>
                <div className={styles.caseStudyImage}>
                  <h3 className={styles.cardTitle}>
                    {blog.title.length > 90
                      ? `${blog.title.slice(0, 90)}...`
                      : blog.title}
                  </h3>
                </div>
                <div className={styles.content}>
                  <p className={styles.description}>
                    {blog.description.length > 100
                      ? `${blog.description.slice(0, 100)}...`
                      : blog.description}
                  </p>
                  <Link href={`/others/blogs/${blog.slug}`}>
                    {/* Removed wrapping <a> tag */}
                      <span className={styles.learnMoreLink}>Learn More</span>
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

export default Blogs;
