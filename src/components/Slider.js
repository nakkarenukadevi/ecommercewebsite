import React, { useState } from "react";
import left_icon from "./less-than-solid.svg";
import right_icon from "./greater-than-solid.svg";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import Home from "../Home";

const Slider = () => {
  let images = [image2, image3, image1, image4, image5];
  let [showImage, setShowImage] = useState(0);

  return (
    <>
      <div className="slider_container">
        <div className="left_icon">
          <img
            src={left_icon}
            onClick={() => {
              if (showImage) {
                setShowImage();
              }
            }}
          />
        </div>

        <img src={images[showImage]} style={{ height: "90%", width: "100%" }} />

        <div
          className="right_icon"
          onClick={() => {
            if (showImage < images.length - 1) {
              setShowImage((showImage) => showImage + 1);
            } else {
              setShowImage(0);
            }
          }}
        >
          <img src={right_icon} />
        </div>
      </div>
      <Home />
    </>
  );
};

export default Slider;
