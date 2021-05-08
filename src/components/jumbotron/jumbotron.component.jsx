import React from "react";


import {  Inner, Item, Container, Pane, Title, SubTitle, Image } from "./styles/jumbotron.styles";


const Jumbotron = ({direction = "row", children, ...otherProps}) => {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}


Jumbotron.Container = ({children, ...otherProps}) => {
  return <Container {...otherProps}>{ children }</Container>
}

Jumbotron.Pane = ({children, ...otherProps}) => {
  return <Pane {...otherProps}>{ children }</Pane>
}

Jumbotron.Title = ({children, ...otherProps}) => {
  return <Title {...otherProps}>{ children }</Title>
}

Jumbotron.SubTitle = ({children, ...otherProps}) => {
  return <SubTitle {...otherProps}>{ children }</SubTitle>
}

Jumbotron.Image = ({...otherProps}) => {
  return <Image {...otherProps} />
}

export default Jumbotron;