import React from "react";
import { Container, ListItem, Button } from "./Releases.style";
import { AlbumGridItemProps } from "src/components/AlbumGridItem/AlbumGridItem";

const Releases = ({ releases }: { releases: AlbumGridItemProps[] }) => (
  <Container>
    {releases.map(release => {
      return (
        <ListItem key={release.url}>
          <img src={release.img} alt={release.title} />
          <Button href={release.url} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-play" />
            &nbsp; Listen Now
          </Button>
        </ListItem>
      );
    })}
  </Container>
);

export default Releases;
