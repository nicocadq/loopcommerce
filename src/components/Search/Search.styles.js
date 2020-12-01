import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  height: 36px;
  position: relative;
  width: 336px;

  & > form {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & > form > input {
    border: 1px solid ${({ theme: { colors } }) => colors.scaleGray3};
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0 0
      ${({ theme: { border } }) => border.radius.xs};
    padding: 10px;
    width: 100%;
    height: 100%;
  }

  & > form > input:focus {
    outline: none;
    border: 2px solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0 0
      ${({ theme: { border } }) => border.radius.xs};
  }
`;

export const IconContainer = styled.span`
  background-color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border: 1px solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border-radius: 0 ${({ theme: { border } }) => border.radius.xs}
    ${({ theme: { border } }) => border.radius.xs} 0;
  color: ${({ theme: { colors } }) => colors.scaleWhite};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  height: 100%;
  padding: 8px 6px;
`;

export const LiveSearchContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleGray3};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  display: flex;
  flex-direction: column;
  min-height: 30px;
  padding: 5px;
  position: absolute;
  top: 40px;
  width: 100%;
`;

export const ProductContainer = styled.span`
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ theme: { colors } }) => colors.scaleWhite};
  padding: 5px;
  width: 100%;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.scaleWhite};
    color: ${({ theme: { colors } }) => colors.scaleGray3};
    cursor: pointer;
    transition: 0.05s ease-in;
  }
`;
