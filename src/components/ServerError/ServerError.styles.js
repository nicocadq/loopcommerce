import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.lightRed};
  border: 1px solid ${({ theme: { colors } }) => colors.scaleRed};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ theme: { colors } }) => colors.scaleRed};
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-width: 274px;
  padding: 10px;
`;

export const IconContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleRed};
  border-radius: 50%;
  color: ${({ theme: { colors } }) => colors.lightRed};
  font-size: 12px;
  padding: 5px 8px;
`;
