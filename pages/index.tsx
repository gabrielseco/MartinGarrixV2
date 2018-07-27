import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize'
import { Header, HeroImage, LatestReleases, Footer } from './../components';
import { theme } from './../globals/theme';
import resetCss from './../globals/reset';
import { heroProps, latestReleases } from './../shared/data';

injectGlobal`
  ${styledNormalize}
  ${resetCss as any}
`

export default () =>
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Header/>
      <HeroImage {...heroProps}/>
      <LatestReleases images={latestReleases.factory()} />
      <Footer/>
    </React.Fragment>
  </ThemeProvider>
