import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.xl};
  width: 100%;
`;

export const BannerContainer = styled.div`
  margin: 2rem 0rem;
  width: 100%;
`;

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  & > div {
    margin: 10px;
  }
`;

export const NewArrivalsTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.scaleBlack};
  font-size: 2.8rem;
  font-weight: 200;
  letter-spacing: 0.02em;
  padding: 0.5rem;
  margin-left: 5.5%;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 1rem;
  }
`;

export const PaginationContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  margin: 4rem;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.xl};
  width: 90%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  & > div > button {
    border-radius: 0rem;
    border-right: 0rem;
    padding: 0.5rem 0.8rem;
  }

  & > div > button:first-child {
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0rem 0rem
      ${({ theme: { border } }) => border.radius.xs};
  }

  & > div > button:last-child {
    border-right: 0.1rem solid;
    border-radius: 0rem ${({ theme: { border } }) => border.radius.xs}
      ${({ theme: { border } }) => border.radius.xs} 0rem;
  }
`;
