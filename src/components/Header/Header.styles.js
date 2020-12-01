import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "../Form";

export const Container = styled.header`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  display: flex;
  padding: 5px;
  height: 86px;
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
    margin-right: 10px;
  }
`;

export const UserContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGreyishBrown0};
  position: relative;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

export const OptionsDrop = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  box-shadow: 0 0 6px 0 ${({ theme: { colors } }) => colors.transparentBlack};
  position: absolute;
  top: 30px;
  right: 5px;
  width: 150px;
  z-index: 2;

  &:after {
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent
      ${({ theme: { colors } }) => colors.scaleWhite} transparent;
    content: "";
    height: 0;
    position: absolute;
    right: 10px;
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
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.scaleGray3};
    border-radius: 0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  width: 25px;
`;
