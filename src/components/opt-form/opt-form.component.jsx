import React from "react";

import { Button, Container, Input, Title } from "./opt-form.styles";

const OptForm = () => {
  return (
    <Container>
      <Title>
        Ready to watch? Enter your email to create or restart your membership.
      </Title>
      <Input type="email" required placeholder="Email address" />
      <Button type="button">
        Get Started <span>&#10095;</span>
      </Button>
    </Container>
  );
};

export default OptForm;
