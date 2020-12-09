import styled from "@emotion/styled";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;
`;

export const Message = styled.p`
  background-color: ${({ theme: { colors } }) => colors.scaleRed};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ theme: { colors } }) => colors.lightRed};
  padding: 3rem;
`;

export const Error = styled.p`
  padding: 3rem;
  width: 80%;
`;
