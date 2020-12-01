import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

export const ProductContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70%;
  margin-top: 30px;
  padding: 30px;
  width: 100%;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md}) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 370px;
  width: 370px;

  & > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md}) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 30px;
  height: 370px;
`;

export const Info = styled.div`
  height: 70%;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Name = styled.h3`
  font-size: 34px;
  height: 60px;
  word-wrap: break-word;
`;

export const PriceContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGray3};
  font-size: 18px;
`;

export const Price = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleBlack};
  font-size: 24px;
`;

export const Description = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGray3};
  font-size: 16px;
  text-overflow: ellipsis;
  margin-top: 15px;
`;

export const QuantityActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    border-radius: 0px;
    border-right: 0px;
    padding: 5px 8px;
    margin-top: 5px;
  }

  & > button:first-child {
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0px 0px
      $radius;
  }

  & > button:last-child {
    border-right: 1px solid;
    border-radius: 0px ${({ theme: { border } }) => border.radius.xs}
      ${({ theme: { border } }) => border.radius.xs} 0px;
  }
`;

export const Amount = styled.span`
  border: 1px solid ${({ theme: { colors } }) => colors.lightBlack};
  border-radius: 0px;
  border-right: 0px;
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  font-size: 12px;
  padding: 5.5px 8px;
  margin-top: 5px;
`;

export const ProductActionsContainer = styled.div`
  & > button {
    text-transform: uppercase;
    margin: 5px;
  }

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md}) {
    width: 100%;

    & > button {
      width: 100%;
    }
  }
`;

export const IconContainer = styled.span`
  margin-left: 4px;
`;
