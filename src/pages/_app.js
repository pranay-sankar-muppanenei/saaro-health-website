import Layout from "../components/layout/Layout";

import "@/styles/globals.css"; // if not already included

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
