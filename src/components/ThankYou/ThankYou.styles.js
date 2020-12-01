import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 30px;
  padding: 30px;
`;

export const ImageContainer = styled.div`
  margin: 30px;
  min-width: 320px;
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
    font-size: 34px;
    letter-spacing: 1.2px;
  }

  p {
    color: ${({ theme: { colors } }) => colors.scaleGreyishBrown0};
    letter-spacing: 0.4px;
    margin-top: 20px;
  }
`;

export const ActionsContainer = styled.div`
  margin: 10px 0;
`;
