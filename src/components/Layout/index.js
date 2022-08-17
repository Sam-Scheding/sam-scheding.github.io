import "./style.css";
import MainHeader from "../MainHeader";
import { psychadelic } from "../../assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <div
      className="appWrapper"
      style={{ backgroundImage: `url(${psychadelic})` }}
    >
      <MainHeader>
        <a href="/" className="headerLink">
          <h1 className="header">Vlad & Mia's Wedding</h1>
          <p className="headerDate">03•DEC•22</p>
        </a>
      </MainHeader>
      {children}
    </div>
  );
};

export default Layout;
