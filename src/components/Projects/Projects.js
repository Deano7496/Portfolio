import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reddit from "../../Assets/Projects/reddit.png";
import web3 from "../../Assets/Projects/web3.png";
import budget from "../../Assets/Projects/budget.png";
import map from "../../Assets/Projects/map1.jpeg";
import bikes from "../../Assets/Projects/bikes.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Personal Budget"
              description="Personal Budget is a simple REST API application, built with React, Node and Express"
              link="https://github.com/Deano7496/Personal-Budget"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bikes}
              isBlog={false}
              title="BeSpoked Bikes"
              description="Full-stack application built using the PERN stack, in order to
              perform CRUD applications with data from the Postgresql database"
              link="https://github.com/Deano7496/BeSpoked-Bikes"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reddit}
              isBlog={false}
              title="Reddit Clone"
              description="Reddit clone built with React-Redux"
              link="https://github.com/Deano7496/reddit-client-lite"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web3}
              isBlog={false}
              title="Web3 Website"
              description="Web3 website built to view, transfer and receive crypto-currency. Built with React"
              link="https://giacoin-web3-0.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              isBlog={false}
              title="Python Map"
              description="Python project built to read data from twitter api and display points on the world map where each tweet was located."
              link="https://github.com/Deano7496/python-map"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
