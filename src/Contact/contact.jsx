import "./contact.css";
import React from "react";
// import { Link } from "react-router-dom";
// import { routes } from "../routes";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_6xidhjm",
        "template_afjvko7",
        form.current,
        "H1diEPYaB6vPOfRJZ"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <br></br>
        <p style={{ marginBottom: "1rem" }}>
          Reach me out through <b>priyadharshinism2001@gmail.com</b>
        </p>
        <br></br>
        <form ref={form} onSubmit={sendEmail}>
          <div className="in">
            <input name="user_name" type="text" placeholder="Name"></input>
          </div>
          <div className="in">
            <input name="user_email" type="email" placeholder="Email"></input>
          </div>
          <div className="in">
            <textarea
              name="message"
              placeholder="Message"
              style={{ height: "200px" }}
            ></textarea>
          </div>
          <button
            style={{
              width: "15%",
              padding: "5px",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Send
          </button>
        </form>
        <br></br>
        
        {/* <Link to={routes.home} style={{ textDecoration: "none" }}>
          <p style={{ fontSize: "15px", color: "white" }}>Back</p>
        </Link> */}
      </div>
    </div>
  );
}

export default Contact;
