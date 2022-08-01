import "./style.css";
import { spirals } from "../../assets";

const Contact = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${spirals})`,
      }}
    >
      <div>Contact</div>
    </div>
  );
};

export default Contact;
