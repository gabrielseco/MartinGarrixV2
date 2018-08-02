import React from 'react';
import { Container, ListItem, Title, Parragraph, StyledLink } from './ContactLinks.style';

const ContactLinks = () => (
  <Container>
    <ListItem>
      <Title>Management</Title>
      <StyledLink href="mailto:management@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; management@martingarrix.com
      </StyledLink>
    </ListItem>
    <ListItem>
      <Title>Ace Agency</Title>
      <Parragraph>
        Katarina Kostic | Booking (Rest Of World)
        <br />
        <StyledLink href="mailto:katarina@aceagency.com">
          <i className="fa fa-envelope" />
          &nbsp; katarina@aceagency.com
        </StyledLink>
      </Parragraph>
    </ListItem>
    <ListItem>
      <Title>Press</Title>
      <StyledLink href="mailto:press@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; press@martingarrix.com
      </StyledLink>
    </ListItem>
    <ListItem>
      <Title>William Morris</Title>
      <Parragraph>
        Joel Zimmerman | Bookings (North America)
        <br />
        <StyledLink href="mailto:jz@wmeentertainment.com">
          <i className="fa fa-envelope" />
          &nbsp; jz@wmeentertainment.com
        </StyledLink>
      </Parragraph>
    </ListItem>
    <ListItem>
      <Title>Fan Mail</Title>
      <StyledLink href="mailto:hello@martingarrix.com">
        <i className="fa fa-envelope" />
        &nbsp; hello@martingarrix.com
      </StyledLink>
    </ListItem>
  </Container>
);

export default ContactLinks;
