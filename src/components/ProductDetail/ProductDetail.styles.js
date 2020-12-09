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
  margin-top: 3rem;
  padding: 3rem;
  width: 100%;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.md}) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  height: 37rem;
  width: 37rem;

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
  padding: 0rem 3rem;
  height: 37rem;
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
  font-size: 3.4rem;
  height: 60px;
  word-wrap: break-word;
`;

export const PriceContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGray3};
  font-size: 1.8rem;
`;

export const Price = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleBlack};
  font-size: 2.4rem;
`;

export const Description = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGray3};
  font-size: 1.6rem;
  text-overflow: ellipsis;
  margin-top: 1.5rem;
`;

export const QuantityActionsContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    border-radius: 0rem;
    border-right: 0rem;
    padding: 0.5rem 0.8rem;
    margin-top: 0.5rem;
  }

  & > button:first-child {
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0rem 0rem
      $radius;
  }

  & > button:last-child {
    border-right: 0.1rem solid;
    border-radius: 0rem ${({ theme: { border } }) => border.radius.xs}
      ${({ theme: { border } }) => border.radius.xs} 0rem;
  }
`;

export const Amount = styled.span`
  border: 0.1rem solid ${({ theme: { colors } }) => colors.lightBlack};
  border-radius: 0rem;
  border-right: 0rem;
  color: ${({ theme: { colors } }) => colors.lightBlack};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  font-size: 1.2rem;
  padding: 0.55rem 0.8rem;
  margin-top: 0.5rem;
`;

export const ProductActionsContainer = styled.div`
  & > button {
    text-transform: uppercase;
    margin: 0.5rem;
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
  margin-left: 0.4rem;
`;
