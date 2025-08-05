import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={6} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h2 className="project-heading">
          Past <strong className="purple"> Projects </strong>
        </h2>
        <p>Web projects often evolve, and many of my earlier works have since closed or been re-platformed. For your convenience, here's a list of projects that were still accessible during my last check:</p>
        <ul style={{listStyle: 'none'}}>
        <li>
            <a href="https://backyardxscapes.com/" target="_blank" rel="noreferrer">Backyard Xscapes (WordPress)</a>
          </li>
          <li>
            <a href="https://byxscommercial.com/" target="_blank" rel="noreferrer">BYXS Commercial (WooCommerce)</a>
          </li>
          <li>
            <a href="https://clixwipers.com/" target="_blank" rel="noreferrer">Clix Wipers (Shopify)</a>
          </li>
          <li>
            <a href=" https://thepinkpigs.com/" target="_blank" rel="noreferrer">The Pink Pigs (Shopify)</a>
          </li>
          <li>
            <a href="https://regalmobility.com/" target="_blank" rel="noreferrer">Regal Mobility (Magento 2)</a>
          </li>
          <li>
            <a href="https://genemedicsnutrition.com/" target="_blank" rel="noreferrer">genemedics Nutrition (Magento)</a>
          </li>
        </ul>

      </Container>
    </Container>
  );
}

export default Projects;
