import React from 'react';
import { Item } from './style';


export interface AlbumGridItemProps {
  img: string,
  url: string,
  title: string
};

const AlbumGridItem = ({ url, img, title }: AlbumGridItemProps) => (
  <Item>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} />
    </a>
  </Item>
);

export default AlbumGridItem;