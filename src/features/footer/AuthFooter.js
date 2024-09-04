import React from "react";

const AuthFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: "mediumvioletred",
        color: "white",
        textAlign: "center",
        padding: "10px 0",
      }}>
      <p>© {new Date().getFullYear()} | Second Half | All rights reserved</p>
    </footer>
  );
};

export default AuthFooter;
