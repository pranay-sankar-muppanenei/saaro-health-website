import Layout from "../components/layout/Layout";

import "@/styles/globals.css"; // if not already included

export default function App({ Component, pageProps }) {
  const hideLayout = Component.hideLayout || false;
  return (
    <Layout hideLayout={hideLayout}>
      <Component {...pageProps} />
    </Layout>
  );
}
