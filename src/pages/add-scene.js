import React from "react";
import { Container, Columns } from "react-bulma-components";
import AddScene from "../components/Add Scene";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AddScene />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
