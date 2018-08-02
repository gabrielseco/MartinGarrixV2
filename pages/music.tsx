import React from 'react';
import { Layout } from './../containers';
import { Releases } from './../components';
import { releases } from './../shared/data'

export default () =>
  <Layout>
    <Releases releases={releases.factory()}/>
  </Layout>
