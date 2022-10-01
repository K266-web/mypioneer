import React from "react";

function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright@{curryear}</p>
      <a href="#" class="fa fa-podcast"></a>
    </footer>
  );
}

export default Footer;
