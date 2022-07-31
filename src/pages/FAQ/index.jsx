import "./style.css";
import { ripples } from "../../assets";

const FAQ = () => {
  return (
    <div
      className="faq-container"
      style={{
        backgroundImage: `url(${ripples})`,
      }}
    >
      <div className="faq">
        <h1>FAQ</h1>
        <h2>What’s the theme?</h2>
        <p>
          Three years ago, Vlad and Mia met at Burning Seed – a creative,
          collaborative, community-based festival in the Matong State Forest.
          We’ll be adding a little touch of festival flavour to our wedding
          celebrations, surrounded by the people we love most.
        </p>

        <h2>Where is the wedding venue?</h2>
        <p>
          We made the decision to get married in a place very close to our
          hearts – our new home! We can’t wait to welcome you all to our newly
          renovated house in Avondale Heights, our home since May 2022.
        </p>

        <h2>What time should I arrive?</h2>
        <p>
          We recommend you arrive from 5:00pm, for a 5:30pm ceremony start. Help
          yourself to a drink and nibbles while you get settled in. We’ll serve
          food after the ceremony, open up the dance floor and party like
          Cinderella (until midnight) – then it’s time to farewell the
          newlyweds!
        </p>

        <h2>How do I get there?</h2>
        <p>
          Limited free street parking is available along Orleans Rd and
          surrounding streets, and we highly recommend carpooling. If you are
          driving, please drink responsibly and plan how you will get home.
        </p>

        <h2>Can I stay the night?</h2>
        <p>
          To respect our first night together as newlyweds, we kindly ask that
          you depart by midnight and make your way to your home or
          accommodation.
        </p>

        <h2>I’m from interstate – where should I stay?</h2>
        <p>
          There are several hotels, motels and serviced apartments in the
          surrounding suburbs of Maribyrnong, Essendon and Moonee Ponds, all
          within a 10 minute drive. If you prefer to stay in the Melbourne CBD,
          we are a 30 minute drive away.
        </p>

        <h2>Is it a sit down/stand up, indoor/outdoor event?</h2>
        <p>
          In the spirit of the festival where we met, our wedding will be a
          stand-up, mostly outdoor affair. We encourage you to participate in a
          few activities, make some new friends and hit the dance floor!
        </p>

        <h2>What is the dress code?</h2>
        <p>
          Be smart and quirky, cocktail and colourful, dress how you feel and
          don’t be afraid to express yourself! Please avoid wearing plain red or
          plain white. Due to limited seating, we also recommend comfy shoes you
          can stand and dance in. Check the weather beforehand and layer
          accordingly – Melbourne can be temperamental!
        </p>

        <h2>Will there be food and drinks?</h2>
        <p>
          Our wedding will be professionally catered and drinks are on the
          house! Expect a substantial buffet, self-serve bar and maybe a few
          surprises.
        </p>

        <h2>I have dietary restrictions/allergies. How do I let you know?</h2>
        <p>
          Please make sure you add these details when you secure your ticket
          (and add in these details for any other guests in your invited group).
        </p>

        <h2>Can I bring my kids?</h2>
        <p>
          Although we love your little ones, we respectfully request that this
          is an 18+ event. Exceptions can be made if you’re unable to make other
          arrangements – please discuss with us directly.
        </p>

        <h2>Can I bring a +1?</h2>
        <p>
          Due to limited space at our home, our wedding will exclusively be for
          invited guests only.
        </p>

        <h2>Can I take photos and post them to social media?</h2>
        <p>
          While we will have a professional photographer at the wedding, we also
          encourage you to take as many photos as you wish – we only request
          that you 1) be present and put your phones down during our ceremony
          (we’ll give you a photo op later), 2) tag us in any social media
          photos/posts/stories, and 3) please don’t block the photographer from
          getting the best shot!
        </p>

        <h2>Should I bring a gift?</h2>
        <p>
          Your participation in our special day is the greatest gift of all! You
          are definitely not required to bring a gift, but should you wish to,
          we’d greatly appreciate a monetary gift for our 2023 honeymoon!
        </p>

        <h2>I can no longer attend. What should I do?</h2>
        <p>
          If you or anyone in your group can no longer attend for any reason,
          please immediately contact either Vlad or Mia to let them know.
        </p>

        <h2>
          What health and safety measures will you be taking during the event?
        </h2>
        <p>
          We care about your health (and ours too!) so we respectfully ask that
          if you are feeling unwell, have any flu-like symptoms on the day or
          become a close contact, please let us know (and stay home!). We’ll
          provide sanitiser in the bar and buffet areas so everyone can stay
          squeaky clean. A lot of the event will be outdoors, however if you
          wish to wear a mask, you’re very welcome to do so.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
