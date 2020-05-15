import React, { useState } from "react";
import styled from "styled-components";
import { FullHeightDiv, Container, H1 } from "../../components/global/Styles";

const StyledContainer = styled(Container)`
  width: calc(100% - 10rem);
`;

const LightGradient = styled.div`
  background: transparent linear-gradient(180deg, #f2f2f2 0%, #ffffff 50%) 0% 0%
    no-repeat padding-box;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    background: transparent linear-gradient(90deg, #f2f2f2 0%, #ffffff 50%) 0%
      0% no-repeat padding-box;
  }
`;

const Grow1 = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  height: auto;
  position: relative;
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const WatchWrap = styled(Grow1)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 80%;
    height: auto;
    margin-right: 4rem;
  }
`;

const Wrap = styled.div`
  padding: 2rem 0 2rem 3.5rem;
  @media (min-width: 768px) {
    padding: 5rem 0 5rem 7.5rem;
  }
`;

const StyledH1 = styled(H1)`
  color: ${(props) => props.theme.red};
  font-size: 3.2rem;
  line-height: 4.8rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const H3 = styled.h3`
  font-family: ${(props) => props.theme.font};
  font-size: 8rem;
  line-height: 9rem;
  font-weight: 700;
  color: ${(props) => props.theme.black};
  margin-top: 0;
  margin-bottom: 6rem;
  @media (min-width: 768px) {
    font-size: 10rem;
    line-height: 11rem;
    margin-bottom: 10rem;
  }
`;

const P = styled.p`
  color: #999999;
  font-family: ${(props) => props.theme.font};
  font-size: 2.5rem;
  line-height: 3.5rem;
  width: 90%;
`;

const FadedLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 10rem;
  z-index: 1;
  width: 20rem;
  height: auto;
  opacity: 0.1;
  transform: translateX(-50%);
  pointer-events: none;
`;

const Prices = styled(Wrap)`
  p {
    font-weight: 700;
    font-family: ${(props) => props.theme.font};
    font-size: 2.7rem;
    line-height: 5rem;
    color: ${(props) => props.theme.grey};
    margin: 0;
    @media (min-width: 768px) {
      font-size: 5rem;
      line-height: 7.6rem;
    }
  }
  a {
    text-decoration: none;
    position: relative;
    color: ${(props) => props.theme.red};
    font-weight: 600;
    font-family: ${(props) => props.theme.font};
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    align-items: center;
    margin: 0 2rem;
    font-family: ${(props) => props.theme.font};
    color: #707070;
    font-size: 1.4rem;
    line-height: 2.1rem;
    position: relative;
    input {
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    span {
      position: relative;
      top: 0;
      left: 0;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      border: 0.1rem solid ${(props) => props.theme.black};
      cursor: pointer;
      margin-bottom: 1rem;
      &:after {
        content: "";
        border: 0.1rem solid rgba(112, 112, 112, 0.16);
        display: block;
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
        left: -0.6rem;
        top: -0.6rem;
        position: absolute;
      }
    }
    input:checked ~ span:after {
      border: 0.1rem solid ${(props) => props.theme.red};
    }
    &#black {
      span {
        background-color: ${(props) => props.theme.black};
      }
    }
    &#white {
      span {
        background-color: ${(props) => props.theme.white};
      }
    }
  }
`;

const Watch = () => {
  const [color, setColor] = useState("white");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <FullHeightDiv>
      <StyledContainer>
        <LightGradient>
          <FadedLogo
            src="https://res.cloudinary.com/mattkellough/image/upload/v1572192160/apple-grey.svg"
            alt="Grey Apple Logo"
          />
          <Grow1>
            <Wrap>
              <StyledH1>Apple Watch</StyledH1>
              <H3>Change starts within.</H3>
              <P>
                Apple Watch Series 4. Fundamentally redesigned and re‑engineered
                to help you be even more active, healthy, and connected.
              </P>
            </Wrap>
          </Grow1>
          <WatchWrap>
            <img
              src={`https://res.cloudinary.com/mattkellough/image/upload/v1572192942/${color}-watch.jpg`}
              alt={`Apple Watch in ${color}`}
            />
          </WatchWrap>
        </LightGradient>
        <Details>
          <Grow1>
            <Prices>
              <p>From $699</p>
              <a href="/no-where/" onClick={(e) => e.preventDefault()}>
                Buy Now >
              </a>
            </Prices>
          </Grow1>
          <Grow1>
            <Colors>
              <label id="white">
                <input
                  type="radio"
                  name="color"
                  value="white"
                  checked={color === "white"}
                  onChange={handleChange}
                />
                <span />
                White
              </label>
              <label id="black">
                <input
                  type="radio"
                  name="color"
                  value="black"
                  checked={color === "black"}
                  onChange={handleChange}
                />
                <span />
                Black
              </label>
            </Colors>
          </Grow1>
        </Details>
      </StyledContainer>
    </FullHeightDiv>
  );
};

export default Watch;
