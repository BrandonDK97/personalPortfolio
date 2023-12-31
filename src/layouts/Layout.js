import { Fragment, useEffect } from "react";
import Header from "./Header";
const Layout = ({ children }) => {
 
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
export default Layout;
