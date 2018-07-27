import React from 'react';
import { 
  HeroContainer, 
  ArtboardContainer, 
  Artboard, 
  InfoContainer, 
  ButtonContainer,
  Button,
} from './HeroImage.style';

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
      <ArtboardContainer>
        <Artboard src={images.artboard.url} alt={images.artboard.alt}/>
      </ArtboardContainer>
      <InfoContainer>
        <small>{info.date}</small>
        <h1 dangerouslySetInnerHTML={{ __html: info.title }} />
        <p>{info.artist}</p>
        <ButtonContainer>
          <Button href={info.url}>
            <i className="fa fa-play" />
            &nbsp; Listen Song
          </Button>
        </ButtonContainer>
      </InfoContainer>
      {/*
      <div className={styles.infoContainer}>
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
