import "./style.css";
import MainHeader from "../MainHeader";
import { psychadelic } from "../../assets";

const Layout = ({ children }) => {
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
