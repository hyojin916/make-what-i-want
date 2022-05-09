import { useRef } from "react";
import TypeIt from "typeit-react";
import cutedog from "../assets/images/cute-dog.webp";
import useOnScreen from "../hooks/useOnScreen";
import "./Landing.scss";

const Landing = () => {
  const stickyContainer = useRef(null);
  const slide = useRef(null);

  const isVisible = useOnScreen(slide);

  return (
    <div className="landing-wrapper">
      {/* 1. hook message - 이미지 + text  */}
      <div className="first-area">
        <div className="overlay">
          <TypeIt
            options={{
              speed: 80,
              waitUntilVisible: true,
              loop: true,
              loopDelay: 5000,
            }}
          >
            <span className="hook-message">
              Hi~ I'm a frontend developer 😱
            </span>
          </TypeIt>
        </div>
      </div>

      {/* 2. interavtive image showing - image  */}
      <div className="sticky-container" ref={stickyContainer}>
        <div className="second-area sticky">
          {/* 내부 슬라이드 */}

          <div className="info-div slide-container">
            <div className="info-text">
              <h1 className="info-header">What dog is the best dog?</h1>
              <span>
                Dogs are the best. Incredibly loyal, they comfort, protect, and
                love their humans unconditionally, making dogs superior to any
                other pet out there. But not all dogs are created equal. These
                are the 11 best dog breeds, based on factors including health,
                personality, and overall popularity.
              </span>
            </div>
            <div className="slide" ref={slide}>
              {isVisible && (
                <img
                  className={isVisible && "dog"}
                  src={cutedog}
                  alt="so cute"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. responsive grid - position */}
      {/* <div className="third-area"></div> */}
      <div className="first-area">
        <div className="overlay">
          <TypeIt
            options={{
              speed: 80,
              waitUntilVisible: true,
              loop: true,
              loopDelay: 5000,
            }}
          >
            <span className="hook-message">Hi~ I'm frontend developer 😱</span>
          </TypeIt>
        </div>
      </div>
    </div>
  );
};

export default Landing;
