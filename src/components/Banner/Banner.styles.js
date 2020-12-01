import styled from "@emotion/styled";

export const Container = styled.div`
  height: 24rem;
  margin: 0 auto;
  max-width: 90%;
`;

export const Image = styled.img`
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
