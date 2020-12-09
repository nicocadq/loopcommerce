import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const StyledLoader = styled.div`
  border: 1.6rem solid ${({ theme: { colors } }) => colors.scaleGray1};
  border-top: 1.6rem solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
