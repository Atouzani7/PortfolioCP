import logo from "@assets/logo.svg";
import france from "@assets/France.svg";
import anglais from "@assets/Anglais.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footerLook">
      <img className="logoFooter" src={logo} alt="logo" />
      <p> Copyright 2023</p>
      <div className="langue">
        <img className="langue" src={france} alt="logo" />
        <img className="langue" src={anglais} alt="logo" />
      </div>
    </div>
  );
}
