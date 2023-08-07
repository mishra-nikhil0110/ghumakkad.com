import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img01.jpg";
import heroImage02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "./../shared/Subtitle";
import worldImg from "../assets/images/world.png";

const Home = () => (
  <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={"Go where you take yourself"} />
                <img src={worldImg} alt="worldIMAGE"></img>
              </div>
              <h1>
                You Should travel across the world, It makes{" "}
                <span className="highlight">Memories</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                incidunt ut temporibus voluptate. Illum magnam commodi ipsam
                quidem eum aut earum dolore exercitationem? Sequi amet placeat
                vitae fugit quia mollitia.
              </p>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-5">
              <img src={heroImage} alt="heroImage"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-3">
              <video src={heroVideo} alt="heroVideo" controls></video>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box">
              <img src={heroImage02} alt="heroImage"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Home;
