import React from "react";

function Layout({ children }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
      {children}
    </div>
  );
}

export default Layout;
