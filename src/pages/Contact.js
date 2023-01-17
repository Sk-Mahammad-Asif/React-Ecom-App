import styled from "styled-components";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  const {  isAuthenticated, user } = useAuth0();

  return (
    <Wrapper>
       <h2>Contact Us</h2>
       <br/>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21192725265!2d88.27731177631541!3d22.535570756133872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1672064460965!5m2!1sen!2sin"
        width="100%"
         height="450" 
         style={{border:0}}
         allowFullScreen="" 
         loading="lazy" 
         referrerPolicy="no-referrer-when-downgrade"
         title="map">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xayzwvdq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={isAuthenticated ? user.email : ""}
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>


    </Wrapper>
)};

export default Contact;
