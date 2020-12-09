import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  font-family: ${({ theme: { fontFamily } }) => fontFamily.inter};
  padding: 10px;

  &:disabled {
    opacity: 0.5;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  background-color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  border: 1px solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  color: ${({ theme: { colors } }) => colors.scaleWhite};
`;

export const SecondaryButton = styled(StyledButton)`
  border: 1px solid ${({ theme: { colors } }) => colors.scaleSkyBlue1};
  color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
`;

export const SecondaryBlackButton = styled(StyledButton)`
  border: 1px solid ${({ theme: { colors } }) => colors.lightBlack};
  color: ${({ theme: { colors } }) => colors.lightBlack};
`;

export const StyledInput = styled.input`
  background-color: ${({ hasError, theme: { colors } }) =>
    hasError ? colors.lightRed : colors.transparentGray};
  border: 1px solid
    ${({ hasError, theme: { colors } }) =>
      hasError ? colors.scaleRed : colors.scaleGray2};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  height: 40px;
  padding: 10px 16px;
  width: 270px;

  &::placeholder {
    color: ${({ hasError, theme: { colors } }) =>
      hasError ? colors.scaleRed : colors.transparentBlue};
  }
`;

export const InputError = styled.p`
  color: ${({ theme: { colors } }) => colors.scaleRed};
  font-size: 12px;
  margin-top: 5px;
`;

export const Label = styled.label`
  color: ${({ theme: { colors } }) => colors.lightBlack};
  width: 100%;
`;

export const RequiredText = styled.span`
  color: ${({ theme: { colors } }) => colors.scaleGray4};
  font-size: 14px;
  font-style: italic;
  margin-left: 5px;
`;

export const StyledSelect = styled.select`
  appearance: none;

  background: url("../../assets/images/arrow-select.svg")
    ${({ hasError, theme: { colors } }) =>
      hasError ? colors.lightRed : colors.transparentGray}
    no-repeat calc(100% - 10px) !important;

  border: 1px solid
    ${({ hasError, theme: { colors } }) =>
      hasError ? colors.scaleRed : colors.scaleGray2};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  color: ${({ hasError, theme: { colors } }) =>
    hasError ? colors.scaleRed : colors.transparentBlue};
  height: 40px;
  padding: 10px 16px;
  width: 100%;
`;
