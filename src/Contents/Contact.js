import React from "react";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
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
          Contact Us
        </h1>
      </Container>
      <div className="contactContainer">
        <form
          target="_blank"
          action="https://formsubmit.co/jack.w.judge@gmail.com"
          method="POST"
        >
          <div>
            <div>
              <div className="formRow">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="formRow">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="formRow">
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <Button
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
            variant="outline-primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
