import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Alert, AlertTitle } from "@mui/material";
import emailjs, { init } from "@emailjs/browser";
init("DTZtiAh1b05NZclpZ");

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.5rem;
    color: var(--subtitle-color);
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.7rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark2);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 0.5rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const sendEmail = async (e) => {
    await emailjs
      .sendForm(
        "service_y42skk7",
        "template_xvn4grd",
        e.target,
        "DTZtiAh1b05NZclpZ"
      )
      .then(
        (result) => {
          setError(false);
        },
        (error) => {
          setError(true);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(e);
    setSuccess(true);
    // clearing the form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {success ? (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ marginBottom: "2rem" }}
          >
            {error ? (
              <Alert
                severity="error"
                variant="filled"
                style={{ fontSize: "20px" }}
              >
                <AlertTitle>Error in sending..</AlertTitle>
              </Alert>
            ) : (
              <Alert
                severity="success"
                variant="filled"
                style={{ fontSize: "20px" }}
              >
                <AlertTitle>Your message has been sent! </AlertTitle>
              </Alert>
            )}
          </motion.div>
        ) : null}

        <FormStyle onSubmit={handleSubmit}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="form-group">
              <label htmlFor="name">
                Your Name
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="form-group">
              <label htmlFor="email">
                Your Email
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="form-group">
              <label htmlFor="message">
                Your message
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send
          </motion.button>
        </FormStyle>
      </motion.div>
    </>
  );
}
