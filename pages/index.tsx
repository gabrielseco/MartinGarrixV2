import { ThemeProvider } from 'styled-components';
import { Header } from './../components';
import { theme } from './../globals/theme';

export default () =>
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
