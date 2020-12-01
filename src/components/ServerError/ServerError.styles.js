import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightRed};
  border: 0.1rem solid ${({ theme: { colors } }) => colors.scaleRed};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ theme: { colors } }) => colors.scaleRed};
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-width: 27.4rem;
  padding: 1rem;
`;

export const IconContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleRed};
  border-radius: 50%;
  color: ${({ theme: { colors } }) => colors.lightRed};
  font-size: 1.2rem;
  padding: 0.5rem 0.8rem;
`;
