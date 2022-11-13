import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryCovers1 from "../Contents/images/galleryImages/covers/galleryCovers1.jpg";
import galleryCovers2 from "../Contents/images/galleryImages/covers/galleryCovers2.jpg";
import galleryCovers3 from "../Contents/images/galleryImages/covers/galleryCovers3.jpg";
import galleryCovers4 from "../Contents/images/galleryImages/covers/galleryCovers4.jpg";
import galleryCovers5 from "../Contents/images/galleryImages/covers/galleryCovers5.jpg";
import galleryCovers6 from "../Contents/images/galleryImages/covers/galleryCovers6.jpg";
import galleryCovers7 from "../Contents/images/galleryImages/covers/galleryCovers7.jpg";
import galleryCovers8 from "../Contents/images/galleryImages/covers/galleryCovers8.jpg";
import galleryCovers9 from "../Contents/images/galleryImages/covers/galleryCovers9.jpg";
import galleryCovers10 from "../Contents/images/galleryImages/covers/galleryCovers10.jpg";
import galleryCovers11 from "../Contents/images/galleryImages/covers/galleryCovers11.jpg";
import galleryCovers12 from "../Contents/images/galleryImages/covers/galleryCovers12.jpg";
import galleryCovers13 from "../Contents/images/galleryImages/covers/galleryCovers13.jpg";
import galleryCovers14 from "../Contents/images/galleryImages/covers/galleryCovers14.jpg";
import galleryCovers15 from "../Contents/images/galleryImages/covers/galleryCovers15.jpg";
import galleryCovers16 from "../Contents/images/galleryImages/covers/galleryCovers16.jpg";
import galleryCovers17 from "../Contents/images/galleryImages/covers/galleryCovers17.jpg";
import galleryCovers18 from "../Contents/images/galleryImages/covers/galleryCovers18.jpg";
import galleryCovers19 from "../Contents/images/galleryImages/covers/galleryCovers19.jpg";
import galleryCovers20 from "../Contents/images/galleryImages/covers/galleryCovers20.jpg";
import galleryCovers21 from "../Contents/images/galleryImages/covers/galleryCovers21.jpg";
import galleryCovers22 from "../Contents/images/galleryImages/covers/galleryCovers22.jpg";
import galleryCovers23 from "../Contents/images/galleryImages/covers/galleryCovers23.jpg";
import galleryCovers24 from "../Contents/images/galleryImages/covers/galleryCovers24.jpg";
import galleryUpholstery1 from "../Contents/images/galleryImages/upholstery/galleryUpholstery1.jpg";
import galleryUpholstery2 from "../Contents/images/galleryImages/upholstery/galleryUpholstery2.jpg";
import galleryUpholstery3 from "../Contents/images/galleryImages/upholstery/galleryUpholstery3.jpg";
import galleryUpholstery4 from "../Contents/images/galleryImages/upholstery/galleryUpholstery4.jpg";
import galleryUpholstery5 from "../Contents/images/galleryImages/upholstery/galleryUpholstery5.jpg";
import galleryUpholstery6 from "../Contents/images/galleryImages/upholstery/galleryUpholstery6.jpg";
import galleryUpholstery7 from "../Contents/images/galleryImages/upholstery/galleryUpholstery7.jpg";
import galleryUpholstery8 from "../Contents/images/galleryImages/upholstery/galleryUpholstery8.jpg";
import galleryUpholstery9 from "../Contents/images/galleryImages/upholstery/galleryUpholstery9.jpg";
import galleryUpholstery10 from "../Contents/images/galleryImages/upholstery/galleryUpholstery10.jpg";
import galleryUpholstery11 from "../Contents/images/galleryImages/upholstery/galleryUpholstery11.jpg";
import galleryUpholstery12 from "../Contents/images/galleryImages/upholstery/galleryUpholstery12.jpg";
import galleryUpholstery13 from "../Contents/images/galleryImages/upholstery/galleryUpholstery13.jpg";
import galleryUpholstery14 from "../Contents/images/galleryImages/upholstery/galleryUpholstery14.jpg";
import galleryUpholstery15 from "../Contents/images/galleryImages/upholstery/galleryUpholstery15.jpg";
import galleryUpholstery16 from "../Contents/images/galleryImages/upholstery/galleryUpholstery16.jpg";
import galleryUpholstery17 from "../Contents/images/galleryImages/upholstery/galleryUpholstery17.jpg";
import galleryUpholstery18 from "../Contents/images/galleryImages/upholstery/galleryUpholstery18.jpg";
import galleryUpholstery19 from "../Contents/images/galleryImages/upholstery/galleryUpholstery19.jpg";

import other1 from "../Contents/images/galleryImages/other/other1.jpg";
import other2 from "../Contents/images/galleryImages/other/other2.jpg";
import other3 from "../Contents/images/galleryImages/other/other3.jpg";
import other4 from "../Contents/images/galleryImages/other/other4.jpg";

const Gallery = () => {
  const coverImages = [
    {
      original: galleryCovers22,
      thumbnail: galleryCovers22,
    },
    {
      original: galleryCovers2,
      thumbnail: galleryCovers2,
    },
    {
      original: galleryCovers3,
      thumbnail: galleryCovers3,
    },
    {
      original: galleryCovers4,
      thumbnail: galleryCovers4,
    },
    {
      original: galleryCovers5,
      thumbnail: galleryCovers5,
    },
    {
      original: galleryCovers6,
      thumbnail: galleryCovers6,
    },
    {
      original: galleryCovers7,
      thumbnail: galleryCovers7,
    },
    {
      original: galleryCovers8,
      thumbnail: galleryCovers8,
    },
    {
      original: galleryCovers9,
      thumbnail: galleryCovers9,
    },
    {
      original: galleryCovers10,
      thumbnail: galleryCovers10,
    },
    {
      original: galleryCovers11,
      thumbnail: galleryCovers11,
    },
    {
      original: galleryCovers12,
      thumbnail: galleryCovers12,
    },
    {
      original: galleryCovers13,
      thumbnail: galleryCovers13,
    },
    {
      original: galleryCovers14,
      thumbnail: galleryCovers14,
    },
    {
      original: galleryCovers15,
      thumbnail: galleryCovers15,
    },
    {
      original: galleryCovers16,
      thumbnail: galleryCovers16,
    },
    {
      original: galleryCovers17,
      thumbnail: galleryCovers17,
    },
    {
      original: galleryCovers18,
      thumbnail: galleryCovers18,
    },
    {
      original: galleryCovers19,
      thumbnail: galleryCovers19,
    },
    {
      original: galleryCovers20,
      thumbnail: galleryCovers20,
    },
    {
      original: galleryCovers21,
      thumbnail: galleryCovers21,
    },
    {
      original: galleryCovers1,
      thumbnail: galleryCovers1,
    },
    {
      original: galleryCovers23,
      thumbnail: galleryCovers23,
    },
    {
      original: galleryCovers24,
      thumbnail: galleryCovers24,
    },
  ];

  const upholsteryImages = [
    {
      original: galleryUpholstery2,
      thumbnail: galleryUpholstery2,
    },
    {
      original: galleryUpholstery1,
      thumbnail: galleryUpholstery1,
    },
    {
      original: galleryUpholstery3,
      thumbnail: galleryUpholstery3,
    },
    {
      original: galleryUpholstery4,
      thumbnail: galleryUpholstery4,
    },
    {
      original: galleryUpholstery5,
      thumbnail: galleryUpholstery5,
    },
    {
      original: galleryUpholstery6,
      thumbnail: galleryUpholstery6,
    },
    {
      original: galleryUpholstery7,
      thumbnail: galleryUpholstery7,
    },
    {
      original: galleryUpholstery8,
      thumbnail: galleryUpholstery8,
    },
    {
      original: galleryUpholstery9,
      thumbnail: galleryUpholstery9,
    },
    {
      original: galleryUpholstery10,
      thumbnail: galleryUpholstery10,
    },
    {
      original: galleryUpholstery11,
      thumbnail: galleryUpholstery11,
    },
    {
      original: galleryUpholstery12,
      thumbnail: galleryUpholstery12,
    },
    {
      original: galleryUpholstery13,
      thumbnail: galleryUpholstery13,
    },
    {
      original: galleryUpholstery14,
      thumbnail: galleryUpholstery14,
    },
    {
      original: galleryUpholstery15,
      thumbnail: galleryUpholstery15,
    },
    {
      original: galleryUpholstery16,
      thumbnail: galleryUpholstery16,
    },
    {
      original: galleryUpholstery17,
      thumbnail: galleryUpholstery17,
    },
    {
      original: galleryUpholstery18,
      thumbnail: galleryUpholstery18,
    },
    {
      original: galleryUpholstery19,
      thumbnail: galleryUpholstery19,
    },
  ];

  const otherImages = [
    {
      original: other1,
      thumbnail: other1,
    },
    {
      original: other2,
      thumbnail: other2,
    },
    {
      original: other3,
      thumbnail: other3,
    },
    {
      original: other4,
      thumbnail: other4,
    },
  ];

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
      <div style={{ marginBottom: "50px" }}>
        <h2 className="text-center" style={{ marginBottom: "50px" }}>
          Upholstery
        </h2>
        <ImageGallery items={upholsteryImages} />
      </div>
      {/* <hr /> */}
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-center" style={{ marginBottom: "50px" }}>
          Covers
        </h2>
        <ImageGallery items={coverImages} />
      </div>
      <div style={{ marginTop: "50px" }}>
        <h2 className="text-center" style={{ marginBottom: "50px" }}>
          Other
        </h2>
        <ImageGallery items={otherImages} />
      </div>
      <div className="text-center">
        <a href="/">
          <button className="homeBtn">Home</button>
        </a>
      </div>
    </div>
  );
};

export default Gallery;
