import React from "react";
import { Container, Columns } from "react-bulma-components";
import SignIn from "../components/Sign In";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <SignIn />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
