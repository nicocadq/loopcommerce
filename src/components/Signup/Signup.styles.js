import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 3rem;
`;

export const FormContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.scaleWhite};
  border-radius: ${({ theme: { border } }) => border.radius.xs};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 1.6rem;
  height: 100%;
  max-width: 33rem;
  padding: 0 3rem 3rem 3rem;
  width: 90%;

  label {
    display: block;
    margin-top: 1.4rem;
  }

  input,
  select {
    margin: 0.5rem 0rem 0rem 0rem;
  }

  button {
    margin-top: 1.5rem;
    text-transform: uppercase;
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12rem;
  width: 100%;
`;

export const ServerErrorContainer = styled.div`
  margin-top: 1.5rem;
`;

export const AccountMessage = styled.div`
  font-size: 1.6rem;
  margin: 1rem 0rem;

  a {
    color: ${({ theme: { colors } }) => colors.scaleSkyBlue1};
    margin-left: 0.5rem;
    text-decoration: none;
  }
`;
