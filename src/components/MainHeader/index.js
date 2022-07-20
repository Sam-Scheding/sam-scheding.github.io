import React from "react";
import "./index.css";

export const MainHeader = ({ children }) => (
  <div class="main-header">
    <div class="main-header__wrap">
      {children}
      <svg width="0" height="0">
        <defs>
          <clipPath
            id="menu-desktop"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.00277906695,0.04724335049)"
          >
            <path
              d="M.46.271v14.251h.024c.364 4.032 3.993 6.711 8.194 6.53l171.546-4.1 171.012 4.1c4.202.181 7.831-2.498 8.195-6.53h.024V.271z"
              opacity=".9"
            ></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
);

export default MainHeader;
