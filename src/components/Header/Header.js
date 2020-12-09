import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

import Logo from "../Logo";
import Actions from "./Actions";

import { Container, Content } from "./Header.styles";

const Header = ({ children }) => {
  const location = useLocation();

  const reloadHomePage = () =>
    location.pathname === "/" && window.location.reload(true);

  return (
    <Container>
      <Content>
        <Link to="/" onClick={reloadHomePage}>
          <Logo />
        </Link>
        {children}
        <Actions />
      </Content>
    </Container>
  );
};

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
