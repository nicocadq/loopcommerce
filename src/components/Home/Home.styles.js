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
  margin: 20px 0px;
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
  font-size: 28px;
  font-weight: 200;
  letter-spacing: 0.2px;
  padding: 5px;
  margin-left: 5.5%;
`;

export const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin: 10px;
  }
`;

export const PaginationContainer = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  margin: 40px;
  max-width: ${({ theme: { breakpoints } }) => breakpoints.xl};
  width: 90%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  & > div > button {
    border-radius: 0px;
    border-right: 0px;
    padding: 5px 8px;
  }

  & > div > button:first-child {
    border-radius: ${({ theme: { border } }) => border.radius.xs} 0px 0px
      ${({ theme: { border } }) => border.radius.xs};
  }

  & > div > button:last-child {
    border-right: 1px solid;
    border-radius: 0px ${({ theme: { border } }) => border.radius.xs}
      ${({ theme: { border } }) => border.radius.xs} 0px;
  }
`;
