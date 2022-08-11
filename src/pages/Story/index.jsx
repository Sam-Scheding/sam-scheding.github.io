import "./style.css";
import {
  storyAfterHeading,
  storyAfterp2,
  storyAfterp3,
  storyAfterp5,
  storyAfterp6,
  storyAfterp8,
} from "../../assets";
const Story = () => {
  return (
    <div class="contentWrapper">
      <div class="wrapper">
        <h2>Our Story</h2>
        <img src={storyAfterHeading} className="headingimg" />
        <p>
          In September 2019, we first stumbled into each other’s lives at
          Burning Seed – a creative, collaborative, community-based festival in
          the Matong State Forest in New South Wales.
        </p>
        <div className="storyImageWrapper">
          <p>
            We instantly bonded over our shared love of psytrance, festivals,
            fried rice… and Excel spreadsheets.
          </p>
          <img src={storyAfterp2} />
          <p>
            Within a week, our relationship became official. Our adventures took
            us on dozens of road trips, a romantic week in Vanuatu, and a
            magical long weekend at Esoteric Festival.
          </p>
          <img src={storyAfterp3} />
        </div>
        <p>
          In March 2020, the world locked down. We decided to move in together -
          because what could go wrong with spending 24/7 in the same house?
        </p>
        <p>
          From daily walks exploring our new neighbourhood, to coworking in our
          home offices, to inventing creative fusion Asian/European recipes -
          the lockdown brought us closer together than ever.
        </p>
        <img src={storyAfterp5} className="img5" />
        <p>
          So much so, that once the final lockdown ended in November 2021, we
          drove up to Bright and got engaged at the top of Mount Buffalo - and
          it was happily ever after!
        </p>
        <img src={storyAfterp6} className="img6" />
        <p>
          On Christmas Day, we purchased our forever home - and after many
          months of planning, moving and renovations, we’re excited for you to
          see it on our special day.
        </p>
        <p>
          Our dream wedding will bring together our favourite people from every
          facet of our lives - we’ve either danced, camped, worked, studied or
          lived together, and we can’t wait to have you there!
        </p>
        <img src={storyAfterp8} className="img8" />
      </div>
    </div>
  );
};

export default Story;
