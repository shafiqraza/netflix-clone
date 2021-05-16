import styled from "styled-components/macro";

import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // padding: 10px 40px;

  height: 80px;
  align-items: center;
  padding: 0 40px;
`;

export const LogoContainer = styled(Link)`
  height: 36px;
  width: 134px;

  img {
    max-width: 100%;
  }
`;

export const SigninLink = styled(Link)`
  background-color: #e50914;
  color: #fff;
  text-decoration: none;
  padding: 7px 17px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const Background = styled.div`
  background: url(${({ img }) =>
    img ? `../images/misc/${img}.jpg` : `../images/misc/home-bg.jpg`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  border-bottom: 8px solid #222;
`;


export const ChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  margin-top: 150px;
  align-items: center;

  @media (max-width: 470px) {
    margin-top: 90px;
    padding: 0 15px;
  }
`;
