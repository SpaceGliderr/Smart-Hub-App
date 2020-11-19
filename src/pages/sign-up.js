import React from "react";
import { Columns } from "react-bulma-components";
import SignUp from "../components/Sign Up";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <SignUp />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
