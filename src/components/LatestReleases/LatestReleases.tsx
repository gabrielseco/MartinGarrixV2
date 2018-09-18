import React from 'react';
import { Container, Title } from './LatestReleases.style';
import { AlbumGrid } from 'src/components';
import { AlbumGridItemProps } from 'src/components/AlbumGridItem/AlbumGridItem';

interface Props {
  images: AlbumGridItemProps[]
}

const LatestReleases = ({ images }: Props) => (
  <Container>
    <Title>Latest Releases</Title>
    <AlbumGrid images={images} />
  </Container>
);

export default LatestReleases;
