import React from "react";
import { Container, Columns } from "react-bulma-components";
import OnBoarding from "../components/On Boarding";

const Index = () => {
  return (
    <Columns centered>
      <Columns.Column>
        <OnBoarding />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
