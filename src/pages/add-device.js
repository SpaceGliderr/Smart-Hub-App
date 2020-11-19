import React from "react";
import { Container, Columns } from "react-bulma-components";
import AddDevice from "../components/Add Device";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AddDevice />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
