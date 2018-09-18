import styled from 'styled-components';

const localProps = {
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: 'rgba(255, 255, 255, 0.5)',
  size: '3em'
}

export const Drawer = styled.button`
  background: transparent;
  border-color: ${localProps.borderColor};
  border-radius: 0.25em;
  color: ${localProps.color};
  height: ${localProps.size};
  line-height: 1;
  padding: 0.25em 0.75em;
  position: relative;
  text-indent: 10em;
  white-space: nowrap;
  width: ${localProps.size};

  &:after {
    content: "≡";
    display: block;
    font-size: 2rem;
    position: absolute;
    text-indent: 0;
    top: 0.2em;
  }
`