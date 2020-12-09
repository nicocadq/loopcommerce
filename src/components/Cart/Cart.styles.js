import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 50vh;
  overflow-x: auto;
  position: relative;
  width: 100%;
`;

export const StyledTable = styled.table`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  width: 90%;
`;

export const TableCell = styled.td`
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.scaleGray3};
  height: 30px;
  padding: 15px;
  text-align: center;
`;

export const TableHead = styled(TableCell.withComponent("th"))`
  text-transform: uppercase;
`;

export const TotalPrice = styled.span`
  align-self: flex-end;
  color: ${({ theme: { colors } }) => colors.scaleGray4};
  font-size: 20px;
  padding: 30px;
`;

export const Checkout = styled.div`
  margin: 30px;
  position: absolute;
  bottom: 0;
`;
