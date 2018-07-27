import React from 'react';
import { Layout } from './../containers';
import { HeroImage, LatestReleases } from './../components';
import { heroProps, latestReleases } from './../shared/data';

export default () =>
  <Layout>
    <HeroImage {...heroProps}/>
    <LatestReleases images={latestReleases.factory()} />
  </Layout>
