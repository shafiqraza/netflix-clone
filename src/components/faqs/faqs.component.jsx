import React, { useState } from "react";

import faqs from "../../fixtures/faqs.json";

import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
  Frame,
} from "./faqs.styles";

const Faqs = () => {
  const [toggleBody, setToggleBody] = useState([]);

  const toggleBodyFn = title => {

    console.log(title);
    const item = toggleBody.find(item => item === title);

    if(item) {
      const filtered = toggleBody.filter(item => item !== title);
      setToggleBody([...filtered])
    }else {
      setToggleBody([...toggleBody, title]);
    }
  }
  return (
    <Container>
      <Inner>
        <Title>Frequently Asked Questions</Title>
        <Frame>
          {faqs.map((item) => (
            <Item key={item.id}>
              <Header onClick={() => toggleBodyFn(item.header)}>
                {item.header}
                {toggleBody.includes(item.header) ? (
                  <img src="/images/icons/close-slim.png" alt="Close" />
                ) : (
                  <img src="/images/icons/add.png" alt="Open" />
                )}
              </Header>
              <Body className={toggleBody.includes(item.header) ? "open" : "closed"}>
                <span>{item.body}</span>
              </Body>
            </Item>
          ))}
        </Frame>
      </Inner>
    </Container>
  );
};

export default Faqs;
