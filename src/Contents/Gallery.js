import React from 'react'
import {Container} from "react-bootstrap";
import ImageSlider from './ImageSlider';
import { otherImages, upholsteryImages, coverImages } from './GalleryImages';

const Gallery = () => {
  return (
    <div>
      <Container style={{ maxWidth: "70%", marginTop: "40px" }}>
        <h3 className="text-center" style={{ marginBottom: "25px" }}>
          Welcome to Ocean Covers & Upholstery Ltd
        </h3>

        <hr style={{ maxWidth: "50%", textAlign: "center", margin: "auto" }} />

        <h1
          className="text-center"
          style={{ marginTop: "25px", marginBottom: "50px" }}
        >
          Gallery
        </h1>
      </Container>
      <div style={{ marginBottom: "25px" }}>
        <h2 className="text-center" style={{ marginBottom: "10px" }}>
          Upholstery
        </h2>
        <ImageSlider images={upholsteryImages}/>
      </div>
      <div style={{ marginTop: "25px" }}>
        <h2 className="text-center" style={{ marginBottom: "10px" }}>
          Covers
        </h2>
        <ImageSlider images={coverImages}/>
      </div>
      <div style={{ marginTop: "25px" }}>
        <h2 className="text-center" style={{ marginBottom: "10px" }}>
          Other
        </h2>
        <ImageSlider images={otherImages}/>
      </div>
      <div className="text-center">
        <a href="/">
          <button className="homeBtn">Home</button>
        </a>
      </div>
    </div>
  );
}

export default Gallery

