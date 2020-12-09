import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 3rem;
  padding: 3rem;
`;

export const ImageContainer = styled.div`
  margin: 3rem;
  min-width: 32rem;
  max-width: 40%;

  img {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: ${({ theme: { colors } }) => colors.scaleGreyishBrown1};
    font-size: 3.4rem;
    letter-spacing: 0.12rem;
  }

  p {
    color: ${({ theme: { colors } }) => colors.scaleGreyishBrown0};
    letter-spacing: 0.04rem;
    margin-top: 2rem;
  }
`;

export const ActionsContainer = styled.div`
  margin: 1rem 0;
`;
