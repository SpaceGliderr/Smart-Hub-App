import React from "react";
import { Container, Columns } from "react-bulma-components";
import Rooms from "../components/Rooms";

const Index = () => {
  return (
    <Columns centered>
      <Columns.Column>
        <Rooms />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
