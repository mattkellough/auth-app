import React, { useState, createRef, useEffect } from "react";
import styled from "styled-components";
import { FullHeightDiv, Container, H1 } from "../../components/global/Styles";

const StyledContainer = styled(Container)`
  width: calc(100% - 10rem);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const LightGradient = styled.div`
  background: transparent linear-gradient(180deg, #f2f2f2 0%, #ffffff 50%) 0% 0%
    no-repeat padding-box;
  width: calc(100% - 43rem);
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: 768px) {
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
  width: calc(100% - 43rem);
  margin-top: -10em;
`;

const IphoneWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 43rem;
  height: 73rem;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transform: translateX(0);
    &#back {
      transform: translateX(100%);
      opacity: 0;
      z-index: 1;
    }
    &#front {
      z-index: 2;
    }
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

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 20rem;
`;

const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  img {
    height: 100%;
    width: auto;
  }
`;

const Range = styled.input`
  width: 200px;
  height: 9px;
  &:-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 0px solid #000000;
    height: 15px;
    width: 50px;
    border-radius: 0px;
    background: #65001c;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const Iphone = () => {
  const [position, setPosition] = useState(0);
  const frontRef = createRef(null);
  const backRef = createRef(null);
  const smallFrontRef = createRef(null);
  const smallBackRef = createRef(null);
  const inputRange = createRef(null);

  const handleChange = (event) => {
    setPosition(parseInt(event.target.value));
  };

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <FullHeightDiv>
      <StyledContainer>
        <FadedLogo
          src="https://res.cloudinary.com/mattkellough/image/upload/v1572192160/apple-grey.svg"
          alt="Grey Apple Logo"
        />
        <LightGradient>
          <Grow1>
            <Wrap>
              <StyledH1>iPhone</StyledH1>
              <H3>The ultimate iPhone</H3>
              <P>
                The future is here. Join the iPhone Upgrade Program to get the
                latest iPhone - NOW!
              </P>
            </Wrap>
          </Grow1>
        </LightGradient>
        <IphoneWrap>
          <img
            src="https://res.cloudinary.com/mattkellough/image/upload/v1589564330/iphone-front.png"
            alt="iphone-front"
            ref={frontRef}
            id="front"
          />
          <img
            src="https://res.cloudinary.com/mattkellough/image/upload/v1589564330/iphone-back.png"
            alt="iphone-back"
            ref={backRef}
            id="back"
          />
        </IphoneWrap>
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
            <Position>
              <Images>
                <img
                  src="https://res.cloudinary.com/mattkellough/image/upload/v1589564330/iphone-front.png"
                  alt="iphone-front"
                  ref={smallFrontRef}
                />
                <img
                  src="https://res.cloudinary.com/mattkellough/image/upload/v1589564330/iphone-back.png"
                  alt="iphone-back"
                  ref={smallBackRef}
                />
              </Images>
              <Range
                ref={inputRange}
                type="range"
                min="0"
                value={position}
                max="100"
                onChange={handleChange}
              />
            </Position>
          </Grow1>
        </Details>
      </StyledContainer>
    </FullHeightDiv>
  );
};

export default Iphone;
