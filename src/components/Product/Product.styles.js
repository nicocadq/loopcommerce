import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: 6px;
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 240px;
  height: 340px;

  & > button {
    text-transform: uppercase;
  }
`;

export const ImageContainer = styled.div`
  object-fit: contain;
  width: 186px;

  & > img {
    width: 100%;
  }
`;

export const Description = styled.div`
  border-top: 2px solid ${({ theme: { colors } }) => colors.scaleGray1};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 5px;
  width: 80%;
`;

export const Name = styled.p`
  color: ${({ theme: { colors } }) => colors.scaleGreyishBrow1};
  font-size: 15px;
`;

export const Price = styled.span`
  font-size: 22px;
`;
