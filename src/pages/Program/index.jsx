import "./style.css";
import { afterdresscode } from "../../assets";

const Program = () => {
  return (
    <div class="contentWrapper program">
      <div class="wrapper">
        <h2>Program</h2>
        <h3>Date</h3>
        <p>Saturday 3 December 2022</p>
        <h3>Time</h3>
        <p>
          Arrive by 5:00pm for nibbles and drinks
          <br />
          Ceremony begins at 5:30pm
          <br />
          Dinner & dancing to follow
          <br />
          Event will end by 12:00am
        </p>
        <h3>Location</h3>
        <p>Our home in Avondale Heights, VIC</p>
        <h3>DRESS CODE</h3>
        <p>
          Smart & quirky / cocktail & colourful
          <br />
          Dress how you feel & express yourself!
          <br />
          Comfy shoes (to stand & dance in)
          <br />
          Avoid wearing red and/or white
        </p>
        <img src={afterdresscode} className="dressCodeImg" />
        <p>
          See{" "}
          <a href="/faq" className="faq-link">
            FAQ page
          </a>{" "}
          for more details
        </p>
      </div>
    </div>
  );
};

export default Program;
