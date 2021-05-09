import React from "react";

import jumboData from '../../fixtures/jambo.json';

import {  Inner, Item, Container, Pane, Title, SubTitle, Image } from "./jumbotron.styles";

const Jumbotron = ({direction = "row", children, ...otherProps}) => {
  return (
    <Container>
      {
        jumboData.map(item => (
          <Item key={item.id}>
        <Inner direction={direction}>
          <Pane>
            <Title>{ item.title }</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Pane>
          <Pane>
            <Image src={item.image} alt={item.alt}></Image>
          </Pane>
        </Inner>
      </Item>
        ))
      }
      
    </Container>
  );
}

export default Jumbotron;