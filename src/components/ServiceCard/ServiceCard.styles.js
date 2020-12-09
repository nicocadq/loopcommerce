import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 13rem;
  width: 33rem;
`;

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => colors.scaleBlack};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  font-size: 1.5rem;
`;

export const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.scaleGreyishBrown1};
  font-size: 1.6rem;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  font-size: 1.4rem;
  padding: 1.4em;
  background-color: ${({ iconBackgroundColor, theme: { colors } }) =>
    colors[iconBackgroundColor]};
  color: ${({ iconColor, theme: { colors } }) => colors[iconColor]};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 65%;
`;
