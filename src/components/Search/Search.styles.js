import styled from "@emotion/styled";

export const SearchContainer = styled.div`
  height: 3.6rem;
  position: relative;
  width: 33.6rem;

  & > form {
    display: flex;
    align-items: center;
    height: 100%;
  }

  & > form > input {
    border: 0.1rem solid ${({ theme: { colors } }) => colors.scaleGray3};
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0rem 0rem
      ${({ theme: { border } }) => border.radius.xs};
    padding: 1rem;
    width: 100%;
    height: 100%;
  }

  & > form > input:focus {
    outline: none;
    border: 0.2rem solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0rem 0rem
      ${({ theme: { border } }) => border.radius.xs};
  }
`;

export const IconContainer = styled.span`
  background-color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border: 0.1rem solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border-radius: 0rem ${({ theme: { border } }) => border.radius.xs}
    ${({ theme: { border } }) => border.radius.xs} 0rem;
  color: ${({ theme: { colors } }) => colors.scaleWhite};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  font-size: 1.6rem;
  height: 100%;
  padding: 0.8rem 0.6rem;
`;

export const LiveSearchContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleGray3};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  display: flex;
  flex-direction: column;
  min-height: 3rem;
  padding: 0.5rem;
  position: absolute;
  top: 4rem;
  width: 100%;
`;

export const ProductContainer = styled.span`
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ theme: { colors } }) => colors.scaleWhite};
  padding: 0.5rem;
  width: 100%;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.scaleWhite};
    color: ${({ theme: { colors } }) => colors.scaleGray3};
    cursor: pointer;
    transition: 0.05s ease-in;
  }
`;
