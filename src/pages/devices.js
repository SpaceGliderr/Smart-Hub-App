import React from "react";
import { Container, Columns } from "react-bulma-components";
import Devices from "../components/Devices";

const Index = () => {
  return (
    <Columns centered>
      <Columns.Column>
        <Devices />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
