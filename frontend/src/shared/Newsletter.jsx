import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import mtourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newletter__content">
              <h2>
                Subscribe now to get latest update about our plans and content
              </h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your E-Mail" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat cupiditate voluptates, magni dolores molestias modi.
                Placeat id accusamus qui nulla iste{" "}
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={mtourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
