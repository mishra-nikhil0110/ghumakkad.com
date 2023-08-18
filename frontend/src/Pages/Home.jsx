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
import expImage from "../assets/images/tourist-ps.png";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

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
          <ServiceList />
        </Row>
      </Container>
    </section>
    {/* ==========Feature section====== */}

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* ===========feature section end========= */}
    {/* ============Experience section start */}

    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="experince__content">
              <Subtitle subtitle={"Experience"} />
              <h2>
                With our all Experience <br /> we will serve you
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                sapiente nam magni laboriosam ex blanditiis nisi rem adipisci
                optio libero, nobis explicabo, doloremque iusto, vero fuga
                obcaecati molestias voluptatum aspernatur.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years Experince</h6>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="experience__img">
              <img src={expImage} alt="exp_image" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============Experience section end */}

    {/* =====gallary section start */}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery_title">Visit our customers tour gallary </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/* =====gallary section end */}
    {/* ======testimonial section start====== */}
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Fans Love"} />
            <h2 className="testimonial__title">What our fans say about us</h2>
          </Col>
          <Col lg="12">
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* ======testimonial section end ====== */}
    {/* =======NewsLetter section start===== */}
    <Newsletter />

    {/* =======NewsLetter section end===== */}
  </>
);

export default Home;
