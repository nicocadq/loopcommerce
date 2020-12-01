import React from "react";

import Column from "./Column";

import {
  Container,
  Information,
  ColumnsContainer,
  Text,
} from "./Footer.styles";

const brands = ["Adidas", "Puma", "Reebok", "Nike"];

const Footer = () => {
  return (
    <Container>
      <ColumnsContainer>
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
        <Column title="Brands" links={brands} />
      </ColumnsContainer>
      <Information>
        <Text>© 2019 Pixsellz. All rights reserved.</Text>
        <Text>info@pixsellz.io</Text>
        <Text>879-332-9375</Text>
        <Text>456 Hagenes Gardens Suite 808</Text>
      </Information>
    </Container>
  );
};

export default Footer;
