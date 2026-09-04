import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "a638ca38-28f8-4cd4-9d4e-bb0df2bb7306");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");
        event.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Unable to send your message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>

          <p>
            If you have a project, an opportunity, or just want to get in touch,
            feel free to send me a message. I’ll be happy to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>kashifcodes10@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>+91 70137 17836</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label htmlFor="email">Your Email</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label htmlFor="message">Write your message here</label>

          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
