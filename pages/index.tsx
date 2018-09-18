import React from "react";
import { Layout } from "src/containers";
import { HeroImage, LatestReleases } from "src/components";
import { heroProps, latestReleases } from "src/shared/data";

export default () => (
  <Layout>
    <HeroImage {...heroProps} />
    <LatestReleases images={latestReleases.factory()} />
  </Layout>
);
