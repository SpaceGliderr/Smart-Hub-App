import React from "react";
import { Container, Columns } from "react-bulma-components";
import SignUp from "../components/Sign Up";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <p className="is-size-3 has-text-weight-bold">
          Fill in your personal data, you slut!
        </p>
      </Columns.Column>
      <Columns.Column>
        <SignUp />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
