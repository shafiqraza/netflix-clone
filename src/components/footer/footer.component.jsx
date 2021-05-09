import React from 'react';

import {Container, Row, Column, Link, Title, Text, Break } from "./footer.styles";

const Footer = () => (
  <Container>
    <Title>Questions? Contact us.</Title>
    <Break />
    <Row>
      <Column>
        <Link href="#">FAQ</Link>
        <Link href="#">Invester Relations</Link>
        <Link href="#">Privacy</Link>
        <Link href="#">Speed Test</Link>
      </Column>

      <Column>
        <Link href="#">Help Center</Link>
        <Link href="#">Jobs</Link>
        <Link href="#">Cokkie Preferences</Link>
        <Link href="#">logal Notices</Link>
      </Column>

      <Column>
        <Link href="#">Account</Link>
        <Link href="#">Way to Watch</Link>
        <Link href="#">Corprate Information</Link>
        <Link href="#">Netflix Orignals</Link>
      </Column>

      <Column>
        <Link href="#">Media Center</Link>
        <Link href="#">Terms of Use</Link>
        <Link href="#">Contact Us</Link>
      </Column>
      <Text>Netflix Pakistan</Text>
    </Row>
  </Container>
);

export default Footer;