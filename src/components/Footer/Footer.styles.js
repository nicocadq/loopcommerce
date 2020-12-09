import styled from "@emotion/styled";

export const Container = styled.footer`
  background-color: ${({ theme: { colors } }) => colors.scaleGray0};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5rem;
  padding-top: 2em;
  min-height: 20em;
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LinksContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.scaleGray4};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Link = styled.div`
  margin-top: 1rem;
`;

export const Information = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 3rem;
  padding: 3rem;
  width: 90%;
`;

export const Text = styled.p`
  margin: 1rem;
`;
