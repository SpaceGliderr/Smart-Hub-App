import map from "lodash/map";
import classnames from "classnames";
import React, { useState } from "react";
import { Button, Columns } from "react-bulma-components";
import Switch from "react-switch";
import logo from "../../../public/img/logo-only.svg";
import menu from "../../../public/img/menu-button.svg";
import proceed from "../../../public/img/proceed-button.svg";
import smartDevice1 from "../../../public/img/smart-device-1.svg";
import smartDevice2 from "../../../public/img/smart-device-2.svg";
import smartDevice3 from "../../../public/img/smart-device-3.svg";
import lights from "../../../public/img/lights.svg";
import airConditioner from "../../../public/img/air-conditioner.svg";
import airPurifier from "../../../public/img/air-purifier.svg";
import robotVacuum from "../../../public/img/robot-vacuum.svg";
import lock from "../../../public/img/home-lock.svg";
import curtain from "../../../public/img/curtain.svg";
import refridgerator from "../../../public/img/refrigerator.svg";
import smartDevice1On from "../../../public/img/smart-device-1-on.svg";
import smartDevice2On from "../../../public/img/smart-device-2-on.svg";
import smartDevice3On from "../../../public/img/smart-device-3-on.svg";
import lightsOn from "../../../public/img/lights-on.svg";
import airConditionerOn from "../../../public/img/air-conditioner-on.svg";
import airPurifierOn from "../../../public/img/air-purifier-on.svg";
import robotVacuumOn from "../../../public/img/robot-vacuum-on.svg";
import refridgeratorOn from "../../../public/img/refrigerator-on.svg";
import unlock from "../../../public/img/home-lock-unlock.svg";
import curtainUp from "../../../public/img/curtain-up.svg";
import styles from "./styles";

const Home = () => {
  // ======================= VARIABLES & HOOKS
  const [active, setActive] = useState(false);
  // ======================= EVENTS
  const smartDevice = [
    {
      img: smartDevice1,
      imgActive: smartDevice1On,
      title: "Living Room",
    },
    {
      img: smartDevice2,
      imgActive: smartDevice2On,
      title: "Room 1",
    },
    {
      img: smartDevice2,
      imgActive: smartDevice2On,
      title: "Kitchen",
    },
    {
      img: smartDevice3,
      imgActive: smartDevice3On,
      title: "Study Room",
    },
  ];

  const room = [
    {
      img: lights,
      imgActive: lightsOn,
      title: "Lights",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: airConditioner,
      imgActive: airConditionerOn,
      title: "Air Conditioner",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: airPurifier,
      imgActive: airPurifierOn,
      title: "Air Purifier",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: robotVacuum,
      imgActive: robotVacuumOn,
      title: "Robot Vacuum",
      option: "Sleeping",
      optionNegative: "Running",
    },
    {
      img: lock,
      imgActive: unlock,
      title: "House Lock",
      option: "Lock",
      optionNegative: "Unlock",
    },
    {
      img: curtain,
      imgActive: curtainUp,
      title: "Curtain",
      option: "Up",
      optionNegative: "Down",
    },
  ];

  const kitchenDevice = [
    {
      img: refridgerator,
      imgActive: refridgeratorOn,
      title: "Refridgerator",
      option: "On",
      optionNegative: "Off",
    },
  ];

  const onHandleProceed = () => {
    setCookie("get-started", nextFlag);
    redirect({}, "/signup", "push");
  };

  // ======================= VIEWS
  return (
    <>
      <div className="is-inline-flex top-bar">
        <Button className="menu-button">
          <img className="image is-24x24" src={menu} />
        </Button>
        <img className="center" src={logo} />
      </div>
      <div className="is-size-5 right">
        <p>29°C/Subang Jaya</p>
      </div>
      <div className="is-size-5 title">
        <p className="is-size-4 greetings has-tet-weight-bold">Good Evening,</p>
        {/* will change to actual greetings based on the time once firebase is linked */}
        <p className="name is-size-3 name">Name</p>
        {/* will change to actual name based on the user login username once firebase is linked */}
      </div>
      <div className="places smart-devices">
        <div className="is-inline-flex">
          <p className="has-text-dark">Smart Devices</p>
          <button className="proceed-button">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true">
          <Columns.Column>
            {map(smartDevice, (section, index) => {
              return (
                <Columns.Column className="devices" index={index} key={index}>
                  <div className="is-inline-flex">
                    {active ? (
                      <img className="image" src={section.imgActive} />
                    ) : (
                      <img className="image" src={section.img} />
                    )}
                    <div className="caption">
                      <p className="is-size-6 has-text-dark">{section.title}</p>
                      {active ? (
                        <p className="has-text-success is-size-7">On</p>
                      ) : (
                        <p className="has-text-grey-light is-size-7">Off</p>
                      )}
                    </div>
                    <div className="right-switch">
                      <Switch
                        checked={active}
                        onChange={() => setActive(!active)}
                        onColor="#00D1B2"
                        onHandleColor="#ffffff"
                        handleDiameter={12}
                        uncheckedIcon={true}
                        checkedIcon={true}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={34}
                        className="react-switch"
                        id="material-switch"
                      />
                    </div>
                  </div>
                </Columns.Column>
              );
            })}
          </Columns.Column>
        </Columns>
      </div>
      <div className="places area">
        <div className="is-inline-flex">
          <p className="has-text-dark">Living Room</p>
          <button className="proceed-button">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true">
          <Columns.Column>
            {map(room, (section, index) => {
              return (
                <Columns.Column className="devices" index={index} key={index}>
                  <div className="is-inline-flex">
                    {active ? (
                      <img className="image" src={section.imgActive} />
                    ) : (
                      <img className="image" src={section.img} />
                    )}
                    <div className="caption">
                      <p className="is-size-6 has-text-dark">{section.title}</p>
                      {active ? (
                        <p className="has-text-success is-size-7">
                          {section.option}
                        </p>
                      ) : (
                        <p className="has-text-grey-light is-size-7">
                          {section.optionNegative}
                        </p>
                      )}
                    </div>
                    <div className="right-switch">
                      <Switch
                        checked={active}
                        onChange={() => setActive(!active)}
                        onColor="#00D1B2"
                        onHandleColor="#ffffff"
                        handleDiameter={12}
                        uncheckedIcon={true}
                        checkedIcon={true}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={34}
                        className="react-switch"
                        id="material-switch"
                      />
                    </div>
                  </div>
                </Columns.Column>
              );
            })}
          </Columns.Column>
        </Columns>
      </div>
      <div className="places kitchen">
        <div className="is-inline-flex">
          <p className="has-text-dark">Kitchen</p>
          <button className="proceed-button">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true">
          <Columns.Column>
            {map(kitchenDevice, (section, index) => {
              return (
                <Columns.Column className="devices" index={index} key={index}>
                  <div className="is-inline-flex">
                    {active ? (
                      <img className="image" src={section.imgActive} />
                    ) : (
                      <img className="image" src={section.img} />
                    )}
                    <div className="caption">
                      <p className="is-size-6 has-text-dark">{section.title}</p>
                      {active ? (
                        <p className="has-text-success is-size-7">On</p>
                      ) : (
                        <p className="has-text-grey-light is-size-7">Off</p>
                      )}
                    </div>
                    <div className="right-switch">
                      <Switch
                        checked={active}
                        onChange={() => setActive(!active)}
                        onColor="#00D1B2"
                        onHandleColor="#ffffff"
                        handleDiameter={12}
                        uncheckedIcon={true}
                        checkedIcon={true}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 0px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={34}
                        className="react-switch"
                        id="material-switch"
                      />
                    </div>
                  </div>
                </Columns.Column>
              );
            })}
          </Columns.Column>
        </Columns>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

// ======================= EXPORT
export default Home;
