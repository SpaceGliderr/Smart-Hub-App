import React from "react";
import { Container, Columns } from "react-bulma-components";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <FAQ />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
