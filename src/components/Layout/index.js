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
        <h1 className="header">Mia & Vlad's Wedding</h1>
      </MainHeader>
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
