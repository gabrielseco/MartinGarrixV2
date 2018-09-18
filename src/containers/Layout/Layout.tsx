import React from "react";
import { ThemeProvider, injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
import { Header, Footer } from "src/components";
import { theme } from "src/globals/theme";
import resetCss from "src/globals/reset";

injectGlobal`
  ${styledNormalize}
  ${resetCss as any}
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
