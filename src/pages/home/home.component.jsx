import React from "react";

import Header from "../../components/header/header.component";
import OptForm from "../../components/opt-form/opt-form.component";
import Feature from "../../components/feature/feature.component";
import Jumbotron from "../../components/jumbotron/jumbotron.component";
import Faqs from "../../components/faqs/faqs.component";
import Footer from "../../components/footer/footer.component";

const Home = () => (
  <>
    <Header>
      <Feature></Feature>
      <OptForm></OptForm>
    </Header>
    <Jumbotron />
    <Faqs />
    <Footer />
  </>
);

export default Home;