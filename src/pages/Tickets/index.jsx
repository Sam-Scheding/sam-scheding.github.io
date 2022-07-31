import Form from "../../components/Form";
import "./style.css";
import { circle } from "../../assets";

const Tickets = () => {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${circle})`,
      }}
    >
      <Form></Form>
    </div>
  );
};

export default Tickets;
