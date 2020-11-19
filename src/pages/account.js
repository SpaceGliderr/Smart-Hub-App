import React from "react";
import { Container, Columns } from "react-bulma-components";
import AccountDetails from "../components/Account Details";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AccountDetails />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
