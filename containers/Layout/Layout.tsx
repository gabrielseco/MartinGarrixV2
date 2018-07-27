import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize'
import { Header, Footer } from './../../components';
import { theme } from './../../globals/theme';
import resetCss from './../../globals/reset';

injectGlobal`
  ${styledNormalize}
  ${resetCss as any}
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header/>
        {children}
      <Footer/>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
