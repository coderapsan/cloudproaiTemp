// TechnologyUsed.jsx

import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import styles from './TechnologyUsed.module.css'; // Import as a module

const TechnologyUsed = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center mb-4">Technology Used</h2>

        <Row className="mb-4">
          {/* Box 1 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>ETL/Data Integrator</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                <img src="/assets/images/technology/etldataintegrator/hightouch.png" alt="Hightouch Logo" />
                <img src="/assets/images/technology/etldataintegrator/databuildtool.png" alt="DBT Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
              </div>
            </div>
          </Col>

          {/* Box 2 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>Web Application Development</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                <img src="/assets/images/technology/etldataintegrator/hightouch.png" alt="Hightouch Logo" />
                <img src="/assets/images/technology/etldataintegrator/databuildtool.png" alt="DBT Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
              </div>
            </div>
          </Col>

          {/* Box 3 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>Database Management</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                <img src="/assets/images/technology/etldataintegrator/hightouch.png" alt="Hightouch Logo" />
                <img src="/assets/images/technology/etldataintegrator/databuildtool.png" alt="DBT Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mb-4">
          {/* Box 1 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>DevOps</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                
              </div>
            </div>
          </Col>

          {/* Box 2 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>Monitoring Tools</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                <img src="/assets/images/technology/etldataintegrator/hightouch.png" alt="Hightouch Logo" />
                <img src="/assets/images/technology/etldataintegrator/databuildtool.png" alt="DBT Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
              </div>
            </div>
          </Col>

          {/* Box 3 */}
          <Col md={4} className="mb-3">
            <div className={`${styles['tech-card']} bg-light border p-3`}>
              <h4>Cloud Platform</h4>
              <div className={`${styles['logo-container']}`}>
                <img src="/assets/images/technology/etldataintegrator/fivetran.png" alt="Fivetran Logo" />
                <img src="/assets/images/technology/etldataintegrator/databricks.png" alt="Databricks Logo" />
                <img src="/assets/images/technology/etldataintegrator/hightouch.png" alt="Hightouch Logo" />
                <img src="/assets/images/technology/etldataintegrator/databuildtool.png" alt="DBT Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
                <img src="/assets/images/technology/etldataintegrator/datavault.png" alt="Data Vault Logo" />
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
