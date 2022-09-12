import React, { useEffect } from "react";
import "../../src/App.css";

import { Container, Carousel, Row, Col } from "react-bootstrap";
import Hero1 from "../Contents/images/Hero1.jpg";
import Hero2 from "../Contents/images/Hero2.jpg";
import Hero3 from "../Contents/images/Hero3.jpg";
import Hero4 from "../Contents/images/Hero4.jpg";
import Hero5 from "../Contents/images/Hero5.jpg";
import Square1 from "../Contents/images/Square1.jpg";
import Square2 from "../Contents/images/Square2.jpg";
import Square3 from "../Contents/images/Square3.jpg";

const Home = () => {

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero5} alt="Fith slide" />
        </Carousel.Item>
      </Carousel>
      <Container style={{ maxWidth: "70%", marginTop: "40px" }}>
        <h3 className="text-center" style={{ marginBottom: "25px" }}>
          Welcome to Ocean Covers & Upholstery Ltd
        </h3>

        <hr style={{ maxWidth: "50%", textAlign: "center", margin: "auto" }} />

        <p className="text-center" style={{ marginTop: "25px" }}>
          We specialise in the design and manufacture of all marine covers and
          upholstery.
          <br />
          Our boat covers and upholstery are custom designed and made to fit
          each boat, to
          <br /> your requirements and specifications.
        </p>
      </Container>
      <div
        className="bg-secondary"
        style={{
          marginTop: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <Row className="m-auto">
          <Col className="d-flex justify-content-center" md={4} sm={12}>
            <img src={Square1} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" md={4} sm={12}>
            <img src={Square2} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" md={4} sm={12}>
            <img src={Square3} height="250" width="300" />
          </Col>
        </Row>
      </div>
      <Container style={{ maxWidth: "100%", marginTop: "40px" }}>
        <p className="text-center">
          We offer a variety of services and products to the marine, automotive,
          camping/outdoors, <br /> residential and commercial markets.
        </p>
        <p className="text-center">
          Ocean Covers & Upholstery has been established on the North Shore for
          over 20 years <br /> and have an experienced team to deliver excellent
          quality and craftsmanship for your project.
        </p>
      </Container>
      <div style={{ marginTop: "40px" }}>
        <Row className="d-flex justify-content-center">
          <Col md={5} sm={12} className="bg-light">
            <Row>
              <Col sm={6} className="d-flex justify-content-center">
                <h2 style={{marginBotton:"10px"}}>
                  Some of
                  <br /> our regular <br />
                  projects
                </h2>
              </Col>
              <Col sm={6} className="d-flex justify-content-center">
                <ul>
                  <li>
                    All boat covers including canopies, bimini’s, backdrops,
                    overall and road covers
                  </li>
                  <li>All boat cover repair work</li>
                  <li>
                    Boat and automotive upholstery: repairs and new squabs and
                    seats
                  </li>
                  <li>Marine and automotive carpet and linings</li>
                  <li>Tonneau covers</li>
                  <li>Caravan and tent awnings</li>
                  <li>Residential outdoor canvas seating and squabs</li>
                  <li>
                    Residential and commercial shade solutions including
                    cafe-style drop clears
                  </li>
                  <li>Tarpaulin hire</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={1}></Col>
          <Col md={5} sm={12} className="bg-light">
            <Row></Row>
            <Row>
              <Col sm={12} className="d-flex justify-content-center">
                <div>
                  {/* <GoogleMap zoom={10} center={{lat: 44, lng:-22}}></GoogleMap> */}
                </div>

                <div>
                  <p className="addressText">10G Vega Place, Mairangi Bay </p>
                  <p className="addressText">Auckland</p>
                  <p className="addressText">Phone: 09 475 5535</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="galleryContainer">
        <img className="galleryImg" src={Hero2}></img>
        <button className="galleryBtn">Gallery</button>
      </div>
      <div style={{ marginTop: "65px", paddingBottom:"68px", textAlign:"center" }}>
        <h4 style={{ marginBottom: "25px" }}>View all of our services</h4>
        <h4>Covers / Upholstery / Automotive / Carpets & Linings</h4>
        <button className="servicesBtn">Services</button>
      </div>
    </div>
  );
};

export default Home;
