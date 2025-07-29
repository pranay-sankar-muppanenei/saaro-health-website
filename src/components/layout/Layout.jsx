import Header from "./Header";
import Footer from "./Footer"

const Layout = ({ children,hideLayout }) => {
  if (hideLayout) return <>{children}</>;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
