import styled from "styled-components/macro";

export const Container = styled.div`
  text-align: center;
  color: #fff;
  width: 640px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;

  @media (max-width: 530px) {
    font-size: 36px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: 400;
  margin: 0;
`;

