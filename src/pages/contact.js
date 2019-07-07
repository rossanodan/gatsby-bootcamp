import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>You can contact me via <a href="https://twitter.com/RossanoDan" target="_blank">Twitter</a> or via e-mail.</p>
    </Layout>
  )
}

export default ContactPage;