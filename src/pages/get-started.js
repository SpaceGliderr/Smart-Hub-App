import React from "react";
import { Container, Columns } from "react-bulma-components";
import GetStarted from "../components/Get Started";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <GetStarted />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
