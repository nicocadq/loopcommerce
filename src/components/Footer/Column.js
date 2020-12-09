import React from "react";
import PropTypes from "prop-types";

import { StyledColumn, LinksContainer, Link } from "./Footer.styles";

const Column = ({ links, title }) => {
  return (
    <StyledColumn>
      <h3>{title}</h3>
      <LinksContainer>
        {links.map((link) => (
          <Link key={link}>{link}</Link>
        ))}
      </LinksContainer>
    </StyledColumn>
  );
};

Column.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Column;
