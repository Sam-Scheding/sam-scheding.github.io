import React, { memo } from "react";
import "./style.css";
import CountdownTimer from "../../components/CountdownTimer";
import Form from "../../components/Form";
import MainHeader from "../../components/MainHeader";
import {
  pic1,
  pic2,
  pic3,
  circle,
  lightpainting,
  ripples,
  spirals,
} from "../../assets";
import Lottie from "react-lottie";
import weddingAnimation from "../../assets/wedding-outline.json";
import patternAnimation from "../../assets/pattern.json";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// JAE: www.blobmaker.app/ hi

const pictures = [
  {
    src: circle,
    url: '/tickets',
    label: 'TICKETS',
  }, 
  {
    src: lightpainting,
    url: '/location',
    label: 'LOCATION',
  }, 
  {
    src: ripples,
    url: '/faq',
    label: 'FAQ',
  }, 
  {
    src: spirals,
    url: '/contact',
    label: 'CONTACT',
  },
];

const Home = () => {
  const getDefaultOptions = (animation) => ({
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  useEffect(() => {
    // Load queryString into localStorage on page load so it can be 
    // used to populate the form later, even after route changes
    let userInfo = JSON.stringify({})
    const userURLParam = new URLSearchParams(window.location.search).get('u')

    if(userURLParam) {
      const base64UserInfo = decodeURIComponent(userURLParam)
      userInfo = window.atob(base64UserInfo)
    }
  
    window.localStorage.setItem('userInfo', userInfo)
  }, [])

  return (
    <div className="root">
      <MainHeader>
        <h1 className="header">Mia & Vlad's Wedding</h1>
      </MainHeader>
      <main>
        <div className="linkWrapper">
          {pictures.map(({ src, url, label }) => (
              <Link 
                className="link" 
                key={url}
                to={url}
              >
                <div
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    fontSize: '60pt',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '900',
                  }}
                  className="linkImage"
                >
                  { label }
                </div>
              </Link>
          ))}
        </div>
        <div className="wrapper">
          <iframe
            title="Wedding location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12609.318545704798!2d144.96581558271888!3d-37.805747226059054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad668f6537835d7%3A0xdd25b58e27cec5f4!2sLune%20Croissanterie!5e0!3m2!1sen!2sus!4v1655984142122!5m2!1sen!2sus"
            width="500"
            height="450"
            allowFullScreen={false}
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
        <Lottie options={getDefaultOptions(patternAnimation)} />
      </div>
      <CountdownTimer />
      <div className="imageWrapper">
        <img src={pic1} className="left" />
        <img src={pic2} className="right" />
        <img src={pic3} className="left" />
      </div>
    </div>
  );
}

export default Home;
