import { css } from 'styled-components';

const resetCss = css`
:root {
  box-sizing: border-box;
  font-family: ${props => props.theme.fontSize};
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.2;
}

ul {
  padding-left: 0;
}

img {
  max-width: 100%;
}

h2 {
  font-size: 2rem;
}
`

export default resetCss