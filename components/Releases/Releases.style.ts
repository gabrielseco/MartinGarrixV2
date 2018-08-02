import styled from 'styled-components';
import { media } from 'globals/styleUtils';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1em 2em;
  width: 100%;

  ${media.medium`
    width: calc(100% / 2);
  `}

  ${media.large`
    width: calc(100% / 3);
  `}
`;

export const Button = styled.a`
  background: ${props => props.theme.buttonBackground};
  color: ${props => props.theme.white};
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.125em;
  padding: 0.8em;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;