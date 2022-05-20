import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dean Foster </span>
            from <span className="purple"> Atlanta, GA</span>
            <br />I am a full-stack engineer pursuing a career in software development. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Xbox
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for greatness!"{" "}
          </p>
          <footer className="blockquote-footer">LeBron James</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
