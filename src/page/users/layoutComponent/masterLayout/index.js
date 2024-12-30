import React, { memo } from "react";
import Header from "../header";
import Footer from "../footer";

function MasterLayout({ children, ...rest }) {
  return (
    <div {...rest}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default memo(MasterLayout);
