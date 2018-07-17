import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize'
import { Header } from './../components';
import { theme } from './../globals/theme';
import resetCss from './../globals/reset';

injectGlobal`
  ${styledNormalize}
  ${resetCss as any}
`

export default () =>
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
