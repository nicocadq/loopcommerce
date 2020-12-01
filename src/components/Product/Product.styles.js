import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: 0.6rem;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 24rem;
  height: 34rem;

  & > button {
    text-transform: uppercase;
  }
`;

export const ImageContainer = styled.div`
  object-fit: contain;
  width: 18.6rem;

  & > img {
    width: 100%;
  }
`;

export const Description = styled.div`
  border-top: 0.2rem solid ${({ theme: { colors } }) => colors.scaleGray1};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0.5rem;
  width: 80%;
`;

export const Name = styled.p`
  color: ${({ theme: { colors } }) => colors.scaleGreyishBrow1};
  font-size: 1.5rem;
`;

export const Price = styled.span`
  font-size: 2.2rem;
`;
