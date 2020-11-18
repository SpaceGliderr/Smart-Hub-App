import React from "react";
import { Container, Columns } from "react-bulma-components";
import AddRoom from "../components/Add Room";

const Index = () => {
  return (
    <Columns vCentered>
      <Columns.Column>
        <AddRoom />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
