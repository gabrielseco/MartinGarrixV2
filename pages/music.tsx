import React from "react";
import { Layout } from "src/containers";
import { Releases } from "src/components";
import { releases } from "src/shared/data";

export default () => (
  <Layout>
    <Releases releases={releases.factory()} />
  </Layout>
);
