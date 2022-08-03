import React from "react";
import Lottie from "react-lottie";
import spiralAnimation from "../../assets/spirals.json";

const getDefaultOptions = (animation) => ({
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const Success = ({ message }) => {
  return (
    <div class="form submitted">
      <h2>{message}</h2>
      <Lottie options={getDefaultOptions(spiralAnimation)} />
    </div>
  );
};

export default Success;
