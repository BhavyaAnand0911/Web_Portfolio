import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4o5wq3e";

    const emailData = {
      service_id: serviceId,
      user_id: "bhavyaanand0911@gmail.com",
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    };

    // Send the email
    emailjs.sendForm(serviceId, "template_fkr105r", e.target, emailData).then(
      (response) => {
        console.log("Email sent successfully:", response);
        // You can add code here to show a success message or redirect the user to a thank-you page.
      },
      (error) => {
        console.error("Email sending failed:", error);
      }
    );

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <span className="contactHeading">CONTACT ME</span>
      <div className="line"></div>
      <p className="contactPara">
        Please feel free to contact me by filling out the form below. I will
        respond to you as soon as I can.
      </p>
      <div className="contactFormDiv">
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="formElement"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="formElement"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Say Hi!"
            className="formElement"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="formSubmit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
