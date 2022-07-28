import Form from "../../components/Form";
import "./style.css";
import {
  ripples,
} from "../../assets";

const Tickets = () => {

  return (
    <div
      className="container"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${ripples})`,
      }}
    >
      <Form></Form>
    </div>
  )
}

export default Tickets;