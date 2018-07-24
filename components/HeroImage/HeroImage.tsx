import React from 'react';
import { HeroContainer } from './style';

export interface HeroImageProps {
  images: {
    backgroundImage: string,
    artboard: {
      url: string,
      alt: string
    }
  },
  info: {
    date: string,
    title: string,
    artist: string,
    url: string
  }
};

const HeroImage = ({ images, info }: HeroImageProps) => {
  return (
    <HeroContainer image={images.backgroundImage}>
      {/* <div className={styles.artboardContainer}>
        <img
          className={styles.artboard}
          src={images.artboard.url}
          alt={images.artboard.alt}
        />
      </div>
      <div className={styles.infoContainer}>
        <small>{info.date}</small>
        <h1 dangerouslySetInnerHTML={{ __html: info.title }} />
        <p>{info.artist}</p>
        <div className={styles.containerButton}>
          <a href={info.url} className={styles.button}>
            <i className="fa fa-play" />
            &nbsp; Listen Song
          </a>
        </div>
      </div> */}
    </HeroContainer>
  );
};

export default HeroImage;
