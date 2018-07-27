import React from 'react';
import { Container, Title } from './style';
import { AlbumGrid } from './../../components';
import { AlbumGridItemProps } from './../AlbumGridItem/AlbumGridItem';

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
