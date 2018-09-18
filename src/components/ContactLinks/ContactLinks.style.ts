import styled from "styled-components";
import { media } from "src/globals/styleUtils";

const localProps = {
  color: props => props.theme.white
};

export const Container = styled.ul`
  color: ${localProps.color};
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 2em;

  ${media.large`
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 7.5em;
  `};
`;

export const ListItem = styled.li`
  width: 100%;
  ${media.large`
    width: calc(50% - 0.8em);
  `} & + li {
    margin-top: 3em;
    ${media.large`
      margin-top: 0;
    `};
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.5em;
`;

export const Parragraph = styled.p`
  color: ${localProps.color};
`;

export const StyledLink = styled.a`
  color: ${localProps.color};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
