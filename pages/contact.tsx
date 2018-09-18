import React from "react";
import { Layout } from "src/containers";
import { ContactLinks } from "src/components";
import { withStyle } from "src/behaviours";
import { GET_PUBLIC_PATH } from "src/utils";
import { theme } from "src/globals/theme";

const Contact = () => (
  <Layout>
    <ContactLinks />
  </Layout>
);

export default withStyle({
  styles: {
    backgroundImage: `url(${GET_PUBLIC_PATH("contact-bg.jpg")})`,
    backgroundColor: theme.backgroundContact,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  selector: "body"
})(Contact);
