import React from "react";
import { Container, Columns } from "react-bulma-components";
import Home from "../components/Home";

const Index = () => {
  return (
    <Columns centered>
      <Columns.Column>
        <Home />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
