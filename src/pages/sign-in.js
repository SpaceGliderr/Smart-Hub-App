import React from "react";
import { Container, Columns } from "react-bulma-components";
import SignIn from "../components/Sign In";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <p className="is-size-3 has-text-weight-bold has-text-centered title">
          Homiez
        </p>
      </Columns.Column>
      <Columns.Column>
        <SignIn />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
