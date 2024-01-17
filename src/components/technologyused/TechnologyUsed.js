// TechnologyUsed.jsx

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TechnologyUsed.module.css"; // Import as a module

const TechnologyUsed = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center mb-4">Technology Used</h2>
        <p>
          Crafting Tomorrow with Today's Innovation: Elevate Your Experience
          Through the Power of Technology. 🚀✨ Now, let's explore the tech
          behind the magic with CloudProAI
        </p>

        <Row className="mb-4">
          {/* Box 1 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>ETL/Data Integrator</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/etldataintegrator/fivetran.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/etldataintegrator/databricks.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/etldataintegrator/hightouch.png"
                  alt="Hightouch Logo"
                />
                <img
                  src="/assets/images/technology/etldataintegrator/databuildtool.png"
                  alt="DBT Logo"
                />
                <img
                  src="/assets/images/technology/etldataintegrator/datavault.png"
                  alt="Data Vault Logo"
                />
              </div>
            </div>
          </Col>

          {/* Box 2 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>Web Application Development</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/webdevelopment/angular.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/express.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/native.png"
                  alt="Hightouch Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/node.png"
                  alt="DBT Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/react.png"
                  alt="Data Vault Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/rubyonrails.png"
                  alt="Data Vault Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/vue.png"
                  alt="Data Vault Logo"
                />
                <img
                  src="/assets/images/technology/webdevelopment/wordpress.png"
                  alt="Data Vault Logo"
                />
              </div>
            </div>
          </Col>

          {/* Box 3 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>Database Management</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/dbmanagement/cassandra.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/mongodb.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/mssqlserver.png"
                  alt="Hightouch Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/mysql.png"
                  alt="DBT Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/oracle.png"
                  alt="Data Vault Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/postgresql.png"
                  alt="Data Vault Logo"
                />
                <img
                  src="/assets/images/technology/dbmanagement/snowflake.png"
                  alt="Data Vault Logo"
                />
              </div>
            </div>
          </Col>
        </Row>

        <Row className="mb-4">
          {/* Box 1 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>DevOps</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/devops/ansible.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/devops/gitlab.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/devops/jenkins.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/devops/kubernetes.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/devops/terraform.png"
                  alt="Databricks Logo"
                />
              </div>
            </div>
          </Col>

          {/* Box 2 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>Monitoring Tools</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/monitoringtools/datadog.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/monitoringtools/grafana.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/monitoringtools/newrelic.png"
                  alt="Hightouch Logo"
                />
                <img
                  src="/assets/images/technology/monitoringtools/prometheus.png"
                  alt="DBT Logo"
                />
              </div>
            </div>
          </Col>

          {/* Box 3 */}
          <Col md={4} className="mb-3">
            <div className={`${styles["tech-card"]} bg-light border p-3`}>
              <h4>Cloud Platform</h4>
              <div className={`${styles["logo-container"]}`}>
                <img
                  src="/assets/images/technology/cloudplatform/aws.png"
                  alt="Fivetran Logo"
                />
                <img
                  src="/assets/images/technology/cloudplatform/azure.png"
                  alt="Databricks Logo"
                />
                <img
                  src="/assets/images/technology/cloudplatform/gcp.png"
                  alt="Hightouch Logo"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Add additional rows as needed */}
      </Container>
    </div>
  );
};

export default TechnologyUsed;
