import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Title,
  Description,
  IconContainer,
  Wrapper,
} from "./ServiceCard.styles";

const ServiceCard = ({
  description,
  icon,
  iconColor,
  iconBackgroundColor,
  title,
}) => {
  return (
    <Container>
      <IconContainer
        iconBackgroundColor={iconBackgroundColor}
        iconColor={iconColor}
      >
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
};

ServiceCard.defaultProps = {
  iconColor: "scaleGreyishBrow1",
  iconBackgroundColor: "scaleGray1",
};

ServiceCard.propType = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconBackgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ServiceCard;
