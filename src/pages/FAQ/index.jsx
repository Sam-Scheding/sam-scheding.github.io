import "./style.css";
import { ripples } from "../../assets";

const FAQ = () => {
  return (
    <div
      className="faq-container"
      style={{
        backgroundImage: `url(${ripples})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="wrapper">
        <h2>FAQ</h2>
        <details>
          <summary>What’s the theme?</summary>
          Three years ago, Vlad and Mia met at Burning Seed – a creative,
          collaborative, community-based festival in the Matong State Forest.
          We’ll be adding a little touch of festival flavour to our wedding
          celebrations, surrounded by the people we love most.
        </details>

        <details>
          <summary>Is it a sit down/stand up, indoor/outdoor event?</summary>
          In the spirit of the festival where we met, our wedding will be a
          stand-up, mostly outdoor affair. We encourage you to participate in a
          few activities, make some new friends and hit the dance floor!
        </details>

        <details>
          <summary>Is there parking available?</summary>
          Limited free street parking is available along Orleans Rd and
          surrounding streets, and we highly recommend carpooling. If you are
          driving, please drink responsibly and plan how you will get home.
        </details>

        <details>
          <summary>Will there be food and drinks?</summary>
          Our wedding will be professionally catered and all dietary
          requirements will be catered for - just let us know in advance.
        </details>

        <details>
          <summary>
            I have dietary restrictions/allergies. How do I let you know?
          </summary>
          Please make sure you add these details when you secure your ticket
          (and add in these details for any other guests in your invited group).
        </details>

        <details>
          <summary>Can I bring my kids?</summary>
          Although we love your little ones, we respectfully request that this
          is an 18+ event. Exceptions can be made if you’re unable to make other
          arrangements – please discuss with us directly.
        </details>

        <details>
          <summary>Can I bring a +1?</summary>
          Due to limited space at our home, our wedding will exclusively be for
          invited guests only.
        </details>

        <details>
          <summary>Can I take photos and post them to social media?</summary>
          While we will have a professional photographer at the wedding, we also
          encourage you to take as many photos as you wish – we only request
          that you 1) be present and put your phones down during our ceremony
          (we’ll give you a photo op later), 2) tag us in any social media
          photos/posts/stories, and 3) please don’t block the photographer from
          getting the best shot!
        </details>

        <details>
          <summary>Should I bring a gift?</summary>
          Your participation in our special day is the greatest gift of all!
          We’d greatly appreciate a monetary contribution towards our 2023
          honeymoon.
        </details>

        <details>
          <summary>Can I stay the night?</summary>
          To respect our first night together as newlyweds, we kindly ask that
          you depart by midnight and make your way to your home or
          accommodation.
        </details>

        <details>
          <summary>I’m from interstate – where can I stay?</summary>
          There are several hotels, motels and serviced apartments in the
          surrounding suburbs of Maribyrnong, Essendon and Moonee Ponds, all
          within a 10 minute drive. If you prefer to stay in the Melbourne CBD,
          we are a 30 minute drive away.
        </details>

        <details>
          <summary>What health and safety measures will you be taking?</summary>
          We care about your health (and ours too!) so we ask that if you are
          feeling unwell, have any flu-like symptoms or become a close contact,
          please let us know (and stay home!). We’ll provide sanitiser so
          everyone can stay squeaky clean. A lot of the event will be outdoors,
          but if you wish to wear a mask, you’re welcome to do so.
        </details>

        <details>
          <summary>I can no longer attend. What should I do?</summary>
          If you or anyone in your group can no longer attend for any reason,
          please contact us and let us know as soon as possible.
        </details>
      </div>
    </div>
  );
};

export default FAQ;
