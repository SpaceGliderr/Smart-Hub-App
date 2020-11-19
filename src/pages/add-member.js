import React from "react";
import { Container, Columns } from "react-bulma-components";
import AddMember from "../components/Add Member";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AddMember />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
