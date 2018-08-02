import React from 'react';
import { Layout } from './../containers';
import { ContactLinks } from './../components';
import { withStyle } from './../behaviours';
import { GET_PUBLIC_PATH } from './../utils';
import { theme } from './../globals/theme';

const Contact = () => (
  <Layout>
    <ContactLinks/>
  </Layout>
)

export default withStyle({
  styles: {
    backgroundImage: `url(${GET_PUBLIC_PATH('contact-bg.jpg')})`,
    backgroundColor: theme.backgroundContact,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  selector: 'body'
})(Contact)
