import React from 'react';
import { AlbumGridItem } from 'components';
import { AlbumGridItemProps } from 'components/AlbumGridItem/AlbumGridItem';
import { Container } from './AlbumGrid.style';

interface Props {
  images: AlbumGridItemProps[]
};

const AlbumGrid = ({ images }: Props) => (
  <Container>
    {images.map(image => (
      <AlbumGridItem
        img={image.img}
        url={image.url}
        title={image.title}
        key={image.url}
      />
    ))}
  </Container>
);

export default AlbumGrid;