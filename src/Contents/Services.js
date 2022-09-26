import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import coverOne from "../Contents/images/coversOne.jpg";
import coverTwo from "../Contents/images/coversTwo.jpg";
import coverThree from "../Contents/images/coversThree.jpg";
import coverFour from "../Contents/images/coversFour.jpg";

const Services = () => {
  return (
    <div>
      <div>
        <Container style={{ maxWidth: "70%", marginTop: "40px" }}>
          <h3 className="text-center" style={{ marginBottom: "25px" }}>
            Welcome to Ocean Covers & Upholstery Ltd
          </h3>

          <hr
            style={{ maxWidth: "50%", textAlign: "center", margin: "auto" }}
          />

          <h1
            className="text-center"
            style={{ marginTop: "25px", marginBottom: "50px" }}
          >
            Services
          </h1>
        </Container>
        {/* Covers */}
        <div className="servicesContent">
          <div className="blueHeader">
            <Row>
              <Col sm={12} md={6}>
                <h1 className="headerTitle text-center">Covers</h1>
              </Col>
              <Col sm={12} md={6}></Col>
            </Row>
          </div>
          <div className="coversContent">
            <div className="coversWrapper">
              <Row>
                <Col sm={12} md={6} style={{ marginTop: "30px" }}>
                  <p className="servicesText">
                    - Ocean Covers & Upholstery manufactures and repairs all
                    marine coverwork. Our covers are custom made to your
                    specifications and requirements.
                  </p>
                  <br />
                  <p className="servicesText">
                    - To extend the life of your existing covers, we offer an
                    extensive repair service, including stitching, tears and
                    general cover repairs.
                  </p>
                  <br />
                  <p className="servicesText">
                    - Materials we commonly use include: Acrylic Canvas,
                    Strataglass and Clear PVC's, Stamoid, Mesh and coloured PVC
                    all of which are suitable for the marine environment.
                  </p>
                </Col>
                <Col sm={12} md={6}>
                  <div className="imageWrapper">
                    <img src={coverOne} />
                    <img src={coverTwo} />
                    <img src={coverFour} />
                    <img src={coverThree} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="regularProducts">
            <Row>
              <Col>
                <p className="subtitle">Regular cover products:</p>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={4}>
                <ul>
                  <li>Canopies and Side Curtains</li>
                  <li>Backdrops</li>
                  <li>Bimini Tops and Eyebrow Bimini's</li>
                  <li>Clears</li>
                  <li>Cabin entry Privacy Curtains</li>
                  <li>Cockpit Covers</li>
                  <li>Console Covers</li>
                  <li>Spray Dodgers</li>
                  <li>Lee Cloths</li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <ul>
                  <li>Sail Covers</li>
                  <li>Tender Covers</li>
                  <li>Windscreen Mesh Covers</li>
                  <li>Engine and Outboard Covers</li>
                  <li>Overall Covers</li>
                  <li>Roadcovers</li>
                  <li>Sunshade Covers (on the boat)</li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <ul>
                  <li>Stoneguards</li>
                  <li>Tube Covers for Inflatable Tubes</li>
                  <li>Fender Covers</li>
                  <li>Bow Covers</li>
                  <li>Upholstery Loose Covers</li>
                  <li>Carpet Protection Covers</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* Upholstery */}
      <div className="servicesContent">
        <div className="blueHeader">
          <Row>
            <Col sm={12} md={6}>
              <h1 className="headerTitle text-center">Upholstery</h1>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </div>
        <div className="coversContent">
          <div className="coversWrapper">
            <Row>
              <Col sm={12} md={6} style={{ marginTop: "30px" }}>
                <p className="servicesText">
                  - Ocean Covers & Upholstery manufactures and recovers all
                  marine upholstery.
                </p>
                <br />
                <p className="servicesText">
                  - We design and customise our upholstery to suit your
                  requirements and specifications.
                </p>
                <br />
                <p className="servicesText">
                  - To extend the life of your upholstery, we offer an extensive
                  repair service, including stitching, tears and general
                  upholstery repairs
                </p>
                <br />
                <p className="servicesText">
                  - Materials we commonly use include: Marine vinyl, leather,
                  mesh, acrylic canvas, high grade density foams both interior
                  and exterior.
                </p>
              </Col>
              <Col sm={12} md={6}>
                <div className="imageWrapper">
                  <img src={coverOne} />
                  <img src={coverTwo} />
                  <img src={coverFour} />
                  <img src={coverThree} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="regularProducts">
          <Row>
            <Col>
              <p className="subtitle">Regular upholstery products:</p>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={4}>
              <ul>
                <li>Cockpit seating including Bucket and Helm seats</li>
                <li>Cabin cushions including Sleeping and Infill cushions</li>
                <li>Chillibin and Fishbin squabs and seats</li>
                <li>Upholstery recovery and repairs</li>
                <li>New and customised Upholstery</li>
                <li>Dining area seating</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      {/* AutoMotive */}
      <div className="servicesContent">
        <div className="blueHeader">
          <Row>
            <Col sm={12} md={6}>
              <h1 className="headerTitle text-center">Automotive</h1>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </div>
        <div className="coversContent">
          <div className="coversWrapper">
            <Row>
              <Col sm={12} md={6} style={{ marginTop: "30px" }}>
                <p className="servicesText">
                  - Ocean Covers & Upholstery manufactures and repairs
                  automotive interiors including custom and classic interiors
                </p>
              </Col>
              <Col sm={12} md={6}>
                <div className="imageWrapper">
                  <img src={coverOne} />
                  <img src={coverTwo} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="regularProducts">
          <Row>
            <Col>
              <p className="subtitle">Regular automotive products/services:</p>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={4}>
              <ul>
                <li>Ute Tonneau Covers</li>
                <li>Soft Top repairs</li>
                <li>Hoodlining repairs and replacements</li>
                <li>Carpets: cut and loop pile</li>
                <li>Dash Panels</li>
                <li>New seats, recovery work and repairs</li>
                <li>Custom and classic car work</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>

      {/* Carpets and Linings */}
      {/* <div>
        <div className="blueHeader">
          <Row>
            <Col sm={12} md={6}>
              <h1 className="headerTitle text-center">Carpets and Linings</h1>
            </Col>
            <Col sm={12} md={6}></Col>
          </Row>
        </div>
        <div className="coversContent">
          <div className="coversWrapper">
            <Row>
              <Col sm={12} md={6} style={{ marginTop: "30px" }}>
                <p className="servicesText">
                  - We install interior hull linings, interior and exterior
                  marine carpets and tube matting.
                </p>
              </Col>
              <Col sm={12} md={6}>
                <div className="imageWrapper">
                  <img src={coverOne} />
                  <img src={coverTwo} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="regularProducts">
          <Row>
            <Col>
              <p className="subtitle">
                Regular Carpet & Lining products/services:
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={4}>
              <ul>
                <li>Hull Linings</li>
                <li>Deck Head Panels</li>
                <li>Marine Carpet interior and exterior</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
