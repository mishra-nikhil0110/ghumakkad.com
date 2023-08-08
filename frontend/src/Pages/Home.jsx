import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImage from "../assets/images/hero-img01.jpg";
import heroImage02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "./../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-Tours/FeaturedTourList";


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
                Travel across the world, make awesome
                <span className="highlight"> Memories</span>
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
            <div className="hero__img-box ">
              <img src={heroImage} alt="heroImage"></img>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-2">
              <video src={heroVideo} alt="heroVideo" controls></video>
            </div>
          </Col>
          <Col lg="2">
            <div className="hero__img-box mt-4 ">
              <img src={heroImage02} alt="heroImage"></img>
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    {/* =======hero section =========== */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
<h5 className="services__subtitle">Our Services</h5>
<h2 className="service__title">We offer best services for you</h2>

          </Col>
          <ServiceList/>
        </Row>
      </Container>
    </section>
    {/* ==========Feature section====== */}


 <section>
<Container>
  <Row>
    <Col lg="12" className="mb-5">
      <Subtitle subtitle={'Explore'} />
      <h2 className="featured__tour-title">Our Services</h2>
    </Col>
    <FeaturedTourList />
  </Row>
</Container>

 </section>
 {/* ===========feature section end========= */}
 

  </>
);

export default Home;
