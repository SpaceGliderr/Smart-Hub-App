import React from "react";
import { useRouter } from "next/router";
import { Container, Columns } from "react-bulma-components";
import LightStrip from "../../components/LightStrip";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Columns vCentered>
      <Columns.Column>
        <LightStrip id={id} />
      </Columns.Column>
    </Columns>
  );
};

export default Index;
