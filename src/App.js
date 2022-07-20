import { memo } from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
import Form from "./components/Form";
import MainHeader from "./components/MainHeader";
import {
  pic1,
  pic2,
  pic3,
  circle,
  lightpainting,
  ripples,
  spirals,
} from "./assets";
import Lottie from "react-lottie";
import weddingAnimation from "./assets/wedding-outline.json";
import patternAnimation from "./assets/pattern.json";
// www.blobmaker.app/

const pictures = [circle, lightpainting, ripples, spirals];

function App() {
  const getDefaultOptions = (animation) => ({
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  return (
    <div className="root">
      <MainHeader>
        <h1 class="header">Mia & Vlad's Wedding</h1>
      </MainHeader>
      <main>
        <div class="linkWrapper">
          {pictures.map((picture) => (
            <div class="link">
              <div
                style={{
                  backgroundImage: `url(${picture})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                class="linkImage"
              />
            </div>
          ))}
        </div>
        <div className="wrapper">
          <iframe
            title="Wedding location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.318545704798!2d144.96581558271888!3d-37.805747226059054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668f6537835d7%3A0xdd25b58e27cec5f4!2sLune%20Croissanterie!5e0!3m2!1sen!2sus!4v1655984142122!5m2!1sen!2sus"
            width="500"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <Lottie
            options={getDefaultOptions(weddingAnimation)}
            height={400}
            width={400}
          />
        </div>
      </main>
      <div className="relative">
        <Form />
        <Lottie options={getDefaultOptions(patternAnimation)} />
      </div>
      <CountdownTimer />
      <div class="imageWrapper">
        <img src={pic1} class="left" />
        <img src={pic2} class="right" />
        <img src={pic3} class="left" />
      </div>
    </div>
  );
}

export default memo(App);
