import React, { useState } from "react";

function Contact() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // State to track form submission
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;   // extract field name and value
    setFormData({
      ...formData,
      [name]: value   // update only the changed field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // prevent page reload
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p style={{ color: "green" }}>
          ✅ Thank you for contacting us! We’ll get back to you soon.
        </p>
      )}
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    marginTop: "20px"
  }
};

export default Contact;

