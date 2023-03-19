import "../../src/App.css";
import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import Hero1 from "../Contents/images/homeImages/Hero1.jpg";
import Hero2 from "../Contents/images/homeImages/Hero2.jpg";
import Hero3 from "../Contents/images/homeImages/Hero3.jpg";
// import Hero4 from "../Contents/images/homeImages/Hero4.jpg";
// import Hero5 from "../Contents/images/homeImages/Hero5.jpg";
import Hero6 from "../Contents/images/homeImages/Hero6.jpg";
import Square1 from "../Contents/images/homeImages/Square1.jpg";
import Square2 from "../Contents/images/homeImages/Square2.jpg";
import Square3 from "../Contents/images/homeImages/Square3.jpg";
import Square4 from "../Contents/images/homeImages/Square4.jpg";
import Square5 from "../Contents/images/homeImages/Square5.jpg";
import slideNew1 from "../Contents/images/homeImages/SlideNew1.jpg"
import slideNew2 from "../Contents/images/homeImages/SlideNew2.jpg"


// import GoogleMaps from "simple-react-google-maps";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideNew1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero2} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slideNew2} alt="Fith slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Hero6} alt="Sixth slide" />
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
        style={{
          marginTop: "40px",
          paddingTop: "10px",
          paddingBottom: "10px",
          backgroundColor: "#333535",
        }}
      >
        <Row className="m-auto justify-content-center">
          <Col className="d-flex justify-content-center" lg={2} md={12} sm={12}>
            <img alt="Square One" src={Square1} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" lg={2} md={12} sm={12}>
            <img alt="Square four" src={Square4} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" lg={2} md={12} sm={12}>
            <img alt="Square Two" src={Square2} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" lg={2} md={12} sm={12}>
            <img alt="Square Three" src={Square3} height="250" width="300" />
          </Col>
          <Col className="d-flex justify-content-center" lg={2} md={12} sm={12}>
            <img alt="Square five" src={Square5} height="250" width="300" />
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
          over 30 years <br /> and have an experienced team to deliver excellent
          quality and craftsmanship for your project.
        </p>
      </Container>
      <div style={{ marginTop: "40px" }}>
        <Row className="d-flex justify-content-center">
          <Col lg={5} sm={12} className="bg-light">
            <Row>
              <Col sm={6} className="d-flex justify-content-center">
                <h2 style={{ marginBotton: "10px" }}>
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
                  <li>Diamond Stitched upholstery and repairs </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={1}>{""}</Col>
          <Col lg={5} sm={12} className="bg-light">
            <Row>
              {/* <GoogleMaps
                apiKey={"AIzaSyC8v1fxK-y0gxtAb9Mu_LH8YV9jyZ0k-TE"}
                style={{
                  height: "300px",
                  width: "95%",
                  margin: "auto",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                zoom={15}
                center={{ lat: -36.748708768563795, lng: 174.72913757116436 }}
                markers={{
                  lat: -36.748708768563795,
                  lng: 174.72913757116436,
                }}
              /> */}
            </Row>
            <Row>
              <Col sm={12} className="d-flex justify-content-center">
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
        <img alt="gallery" className="galleryImg" src={Hero2}></img>
        <a href="/gallery">
          <button className="galleryBtn">Gallery</button>
        </a>
      </div>
      <div
        style={{
          marginTop: "65px",
          paddingBottom: "68px",
          textAlign: "center",
        }}
      >
        <h4 style={{ marginBottom: "25px" }}>View all of our services</h4>
        <h4>Covers / Upholstery / Automotive / Carpets & Linings</h4>
        <a href="/services">
          <button className="servicesBtn">Services</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
