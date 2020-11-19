import React from "react";
import { Container, Columns } from "react-bulma-components";
import Settings from "../components/Settings";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <Settings />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
