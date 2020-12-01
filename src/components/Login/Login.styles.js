import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 30px;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  max-width: 330px;
  padding: 0 30px 30px 30px;
  width: 90%;

  & label {
    display: block;
    margin-top: 14px;
  }

  & input,
  & select {
    margin: 5px 0px 0px 0px;
  }

  & button {
    margin-top: 15px;
    text-transform: uppercase;
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
`;

export const ServerErrorContainer = styled.div`
  margin-top: 15px;
`;

export const AccountMessage = styled.div`
  margin: 10px 0px;

  & > a {
    color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
    margin-left: 5px;
    text-decoration: none;
  }
`;
