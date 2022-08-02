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
          <h1 className="header">Mia & Vlad's Wedding</h1>
        </a>
      </MainHeader>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
