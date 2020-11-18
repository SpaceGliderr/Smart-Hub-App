import React from "react";
import { Container, Columns } from "react-bulma-components";
import AddRoutine from "../components/Add Routine";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AddRoutine />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
