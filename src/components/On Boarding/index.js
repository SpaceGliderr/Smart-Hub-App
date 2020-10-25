import map from "lodash/map";
import classnames from "classnames";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Button, Columns } from "react-bulma-components";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
} from "pure-react-carousel";
import logo from "../../../public/img/logo-horizontal.svg";
import gs1 from "../../../public/img/gs1.svg";
import gs2 from "../../../public/img/gs2.svg";
import gs3 from "../../../public/img/gs3.svg";
import gs4 from "../../../public/img/gs4.svg";
import styles from "./styles";

const OnBoarding = () => {
  // ======================= VARIABLES & HOOKS
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const skip = "Skip";
  const cont = "Continue";
  const data = [
    {
      img: gs1,
      title: "Welcome to HOMIEZ!",
      desc:
        "Our team at HOMIEZ is proud to have you onboard! We want to extend a warm welcome and gratritude in showing interest in our application. Enjoy your stay.",
    },
    {
      img: gs2,
      title: "Begin your smart home journey",
      desc:
        "With HOMIEZ, you can seamlessly connect your smart devices, allowing them to communicate with one another, like friends at a dinner party!",
    },
    {
      img: gs3,
      title: "Feel in control with home devices",
      desc:
        "Want to unwind after a long day at work? Fret not, as HOMIEZ allows you to set routines and scenes that can be triggered any where and at any time.",
    },
    {
      img: gs4,
      title: "Sync your settings through the cloud",
      desc:
        "Lastly, HOMIEZ provides convenience through multi-platform support. Meaning you can control your smart home from any device connected to the Internet!",
    },
  ];

  // ======================= EVENTS
  const onHandlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onHandleNext = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onHandleProceed = () => {
    setCookie("get-started", nextFlag);
    redirect({}, "/signup", "push");
  };

  // ======================= VIEWS
  return (
    <>
      <div className="is-inline-flex top-bar">
        <img className="" src={logo} />
        <Button
          className="has-text-primary is-size-5 top-button"
          onClick={onHandleProceed}
        >
          {currentSlide === data.length - 1 ? cont : skip}
        </Button>
      </div>
      <Columns className="homiez-get-started">
        <Columns.Column className="has-text-centered">
          <CarouselProvider
            currentSlide={currentSlide}
            naturalSlideWidth={75}
            naturalSlideHeight={100}
            totalSlides={data.length}
            dragEnabled={false}
            isIntrinsicHeight
          >
            <Slider className="per-page">
              {map(data, (image, index) => {
                return (
                  <Slide index={index} key={index}>
                    <p className="title has-text-weight-medium has-text-centered">
                      {image.title}
                    </p>
                    <div className="image">
                      {!loaded ? <Skeleton /> : null}
                      <Image src={image.img} onLoad={() => setLoaded(true)} />
                    </div>
                    <div className="text">
                      <p className="desc">{image.desc}</p>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <Columns className="is-inline-flex bottom-bar">
              <div className="l-col is-inline-block">
                <Button
                  className={classnames("has-text-primary", {
                    "is-hidden": currentSlide === 0,
                  })}
                  size="normal"
                  onClick={onHandlePrev}
                >
                  Previous
                </Button>
              </div>
              <DotGroup />
              <div className="is-inline-block has-text-right">
                <Button
                  className={classnames("has-text-primary previous-button", {
                    "is-hidden": currentSlide === data.length - 1,
                  })}
                  style={{ cursor: "pointer" }}
                  size="normal"
                  onClick={onHandleNext}
                >
                  Next
                </Button>
              </div>
            </Columns>
          </CarouselProvider>
        </Columns.Column>
        <style jsx>{styles}</style>
      </Columns>
    </>
  );
};

// ======================= EXPORT
export default OnBoarding;
