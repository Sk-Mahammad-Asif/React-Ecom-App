import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Trusted = () => {

  const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }
  img {
    min-width: 5rem;
    height: 10rem;
    border-radius: 5rem;
  }
  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

  return (
     <Wrapper className="brand-section">

      <div className="container">
          <h3>Trusted By 1000+ Companies</h3>
          <div className="brand-section-slider">
            {/* my 1st img  */}
            <div className="slide">
              <Link to="/">
              <img
                src="https://media.giphy.com/media/B1ETiFlIGwSZpLZDy1/giphy.gif"
                alt="trusted-brands"
              />
            </Link>
            </div>
            <div className="slide">
            <Link to="/">
              <img
                src="https://media.giphy.com/media/ywkTx4yhxqweTO46mT/giphy.gif"
                alt="trusted-brands"
              />
            </Link>
            </div>
            <div className="slide">
            <Link to="/">
              <img
                src="https://media.giphy.com/media/BJEGePnDfDemfw7SQV/giphy.gif"
                alt="trusted-brands"
              />
            </Link>
            </div>
            <div className="slide">
            <Link to="/">
              <img
                src="https://media.giphy.com/media/1xkczn4YlrhURN5n0e/giphy.gif"
                alt="trusted-brands"
              />
            </Link>
            </div>
            <div className="slide">
            <Link to="/">
              <img
                src="https://media.giphy.com/media/xYGnFm4mVcMxYIVq3v/giphy.gif"
                alt="trusted-brands"
              />
            </Link>
            </div>
          </div>
        </div>

     </Wrapper>
  )
}

export default Trusted
