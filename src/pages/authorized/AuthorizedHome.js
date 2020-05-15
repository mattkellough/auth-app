import React from "react";
import styled from "styled-components";

const FullGradient = styled.div`
  background: transparent linear-gradient(180deg, #5ac8fa 0%, #ffffff00 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  height: calc(100% - 5rem);
  align-items: center;
`;

const AppleLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProductsText = styled.p`
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.font};
  color: ${(props) => props.theme.black};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: medium;
`;

const AuthorizedHome = () => {
  return (
    <FullGradient>
      <AppleLogo>
        <img
          src="https://res.cloudinary.com/mattkellough/image/upload/v1572189951/apple-white.svg"
          alt="Apple Logo"
        />
      </AppleLogo>
      <ProductsText>New Products Coming This Summer</ProductsText>
    </FullGradient>
  );
};

export default AuthorizedHome;
