import React from "react";
import { Container, Columns } from "react-bulma-components";
import ContactUs from "../components/Contact Us";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <ContactUs />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
