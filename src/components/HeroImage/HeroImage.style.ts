import styled from "styled-components";
import { media } from "src/globals/styleUtils";

const localProps = {
  colorText: "#929292"
};

export const HeroContainer = styled<{ image: string }, any>("div")`
  align-items: center;
  background: url('${props => props.image}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.large`
    flex-direction: row;
    padding: 11em 2em;
  `}
`;

export const ArtboardContainer = styled.div`
  padding-top: 2.5em;

  ${media.large`
    padding-top: 0;
    width: 15.9375em;
  `};
`;

export const Artboard = styled.img`
  max-width: 16.25em;

  ${media.medium`
    max-width: 100%;
  `};
`;

export const InfoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em 0;

  ${media.medium`
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 6em;
    width: 100%;
  `} ${media.large`
    width: auto;
  `}

  small, p {
    color: ${localProps.colorText};
  }

  p {
    margin-top: 0;
  }

  h1 {
    color: ${props => props.theme.white};
    margin: 0 0 0.4em;
    text-align: center;
    text-transform: uppercase;

    ${media.medium`
      font-size: 2.5rem;
      text-align: left;
  `};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1em;
`;

export const Button = styled.a`
  background: ${props => props.theme.buttonBackground};
  border-radius: 1.875em;
  color: ${props => props.theme.white};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.125em;
  padding: 0.75em 2em;
  text-decoration: none;
  text-transform: uppercase;
`;
