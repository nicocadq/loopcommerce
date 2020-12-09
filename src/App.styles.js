import { css } from "@emotion/react";

export const globalStyles = ({ theme }) => css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&family=Lato:wght@400;700&display=swap");

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${theme.colors.scaleGray1};
    margin: 0 auto;
  }

  #root {
    font-family: ${theme.fontFamily.lato};
    min-height: 100vh;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    a footer,
    header {
      flex-shrink: 0;
    }

    main {
      flex-grow: 1;
    }
  }
`;
