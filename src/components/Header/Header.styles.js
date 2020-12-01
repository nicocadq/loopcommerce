import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../Form";

export const Container = styled.header`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  display: flex;
  padding: 0.5rem;
  height: 8.6rem;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.xl};
  width: 100%;
  height: 100%;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;

  & > button,
  & > div {
    margin-right: 1rem;
  }
`;

export const UserContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGreyishBrown0};
  font-size: 1.6rem;
  position: relative;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 0.8rem;
`;

export const OptionsDrop = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  box-shadow: 0 0 0.6rem 0 ${({ theme: { colors } }) => colors.transparentBlack};
  position: absolute;
  top: 3rem;
  right: 0.5rem;
  width: 15rem;
  z-index: 2;

  &:after {
    border-style: solid;
    border-width: 0 1rem 1rem 1rem;
    border-color: transparent transparent
      ${({ theme: { colors } }) => colors.scaleWhite} transparent;
    content: "";
    height: 0;
    position: absolute;
    right: 1rem;
    top: -25%;
    width: 0;
    z-index: 2;
  }

  & > * {
    width: 100%;
  }
`;

export const StyledButton = styled(Button)`
  border: none;
  text-align: right;

  &:nth-child(odd) {
    border-bottom: 0.1rem solid ${({ theme: { colors } }) => colors.scaleGray3};
    border-radius: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 600;
  width: 2.5rem;
`;
