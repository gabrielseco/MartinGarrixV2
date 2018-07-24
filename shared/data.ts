import { GET_PUBLIC_PATH } from './../utils';
import { HeroImageProps } from './../components/HeroImage/HeroImage';

export const heroProps: HeroImageProps = {
  images: {
    backgroundImage: `${GET_PUBLIC_PATH('ocean-bg.jpg')}`,
    artboard: {
      url: `${GET_PUBLIC_PATH('martingarrix-khalid-ocean.jpg')}`,
      alt: 'Martin Garrix feat. Khalid - Ocean'
    }
  },
  info: {
    date: 'Jun 15, 2018',
    title: 'Ocean <br/> is out now!',
    artist: 'Martin Garrix feat. Khalid',
    url: '#'
  }
}