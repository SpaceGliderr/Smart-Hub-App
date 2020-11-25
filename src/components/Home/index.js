import map from "lodash/map";
import React, { useState } from "react";
import { Button, Columns, Modal, Icon } from "react-bulma-components";
import { Fab, FabButton, FabActions, FabAction } from "react-fab";
import Switch from "react-switch";
import logo from "../../../public/img/logo-only.svg";
import logoHorizontal from "../../../public/img/logo-horizontal.svg";
import menu from "../../../public/img/menu-button.svg";
import proceed from "../../../public/img/proceed-button.svg";
import userProfile from "../../../public/img/visit-profile-arrow.svg";
import welcomeHome from "../../../public/img/welcome-home.svg";
import roomIcon from "../../../public/img/room-icon.svg";
import devicesIcon from "../../../public/img/devices-icon.svg";
import scenesIcon from "../../../public/img/scenes-icon.svg";
import routinesIcon from "../../../public/img/routines-icon.svg";
import membersIcon from "../../../public/img/members-icon.svg";
import settingsIcon from "../../../public/img/settings-icon.svg";
import feedbackIcon from "../../../public/img/feedback-icon.svg";
import faqIcon from "../../../public/img/faq-icon.svg";
import contactUsIcon from "../../../public/img/contact-us-icon.svg";
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
  const [modal, setModal] = useState(false);
  // ======================= EVENTS
  const allDevice = [
    {
      img: smartDevice1,
      imgActive: smartDevice1On,
      title: "Living Room",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: smartDevice2,
      imgActive: smartDevice2On,
      title: "Room 1",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: smartDevice2,
      imgActive: smartDevice2On,
      title: "Kitchen",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: smartDevice3,
      imgActive: smartDevice3On,
      title: "Study Room",
      option: "On",
      optionNegative: "Off",
    },
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
    {
      img: refridgerator,
      imgActive: refridgeratorOn,
      title: "Refridgerator",
      option: "On",
      optionNegative: "Off",
    },
  ];

  const titles = [
    {
      id: "1",
      title: "Room",
      img: roomIcon,
      href: "/rooms",
    },
    {
      id: "2",
      title: "Devices",
      img: devicesIcon,
      href: "/devices",
    },
    {
      id: "3",
      title: "Scenes",
      img: scenesIcon,
      href: "/add-scene",
    },
    {
      id: "4",
      title: "Routines",
      img: routinesIcon,
      href: "/add-routine",
    },
    {
      id: "5",
      title: "Members",
      img: membersIcon,
      href: "/add-member",
    },
  ];

  const icon = [
    {
      id: "1",
      title: "Room",
      img: roomIcon,
      href: "/add-room",
    },
    {
      id: "2",
      title: "Devices",
      img: devicesIcon,
      href: "/add-device",
    },
    {
      id: "3",
      title: "Scenes",
      img: scenesIcon,
      href: "/add-scene",
    },
    {
      id: "4",
      title: "Routines",
      img: routinesIcon,
      href: "/add-routines",
    },
    {
      id: "5",
      title: "Members",
      img: membersIcon,
      href: "/members",
    },
  ];

  const scene = [
    {
      id: "1",
      number: "1",
      scene: "Night",
    },
    {
      id: "2",
      number: "2",
      scene: "Study",
    },
    {
      id: "3",
      number: "3",
      scene: "Sleep",
    },
    {
      id: "4",
      number: "4",
      scene: "Power Saving",
    },
  ];

  const rooms = [
    {
      img: smartDevice1,
      imgActive: smartDevice1On,
      title: "Living Room",
      option: "On",
      optionNegative: "Off",
    },
    {
      img: smartDevice2,
      imgActive: smartDevice2On,
      title: "Room 1",
      option: "On",
      optionNegative: "Off",
    },
  ];

  const icon1 = [
    {
      id: "1",
      title: "Settings",
      img: settingsIcon,
      href: "/settings",
    },
    {
      id: "2",
      title: "Feedback",
      img: feedbackIcon,
      href: "/settings",
    },
  ];

  const icon2 = [
    {
      id: "1",
      title: "FAQ",
      img: faqIcon,
      href: "/faq",
    },
    {
      id: "2",
      title: "Contact Us",
      img: contactUsIcon,
      href: "/contact-us",
    },
  ];

  const onToggleModal = () => {
    setModal(!modal);
  };

  const renderCTA = () => {
    if (modal) {
      return (
        <div className="">
          <Modal
            className="navbar-menu-in"
            show={modal}
            onClose={onToggleModal}
            closeOnBlur
          >
            <Modal.Card className="full-height left is-absolute">
              <Modal.Card.Body className="nav-bar animate__fadeInLeft">
                <aside className="menu">
                  <div className="logo-horizontal">
                    <img src={logoHorizontal} />
                  </div>
                  <div className="user-profile">
                    <div className="is-inline-flex">
                      <p className="has-text-weight-medium">Nicholas Lee</p>
                      <a href="/account">
                        <Button className="right is-absolute auto none-backgound">
                          <img className="image is-32x32" src={userProfile} />
                        </Button>
                      </a>
                    </div>
                    <p className="has-text-grey is-size-7">
                      nilchyyy@gmail.com
                    </p>
                  </div>
                  <p className="menu-label">My Home</p>
                  {map(titles, (section, index) => {
                    return (
                      <div index={index} key={section.id}>
                        <ul className="menu-list">
                          <a href={section.href}>
                            <div className="is-inline-flex">
                              <img
                                className="image is-24x24 proceed-button"
                                src={section.img}
                              />
                              <p className="name">{section.title}</p>
                            </div>
                          </a>
                        </ul>
                      </div>
                    );
                  })}
                  <p className="menu-label">General</p>
                  {map(icon1, (section, index) => {
                    return (
                      <div index={index} key={section.id}>
                        <ul className="menu-list">
                          <a href={section.href}>
                            <div className="is-inline-flex">
                              <img
                                className="image is-24x24 proceed-button"
                                src={section.img}
                              />
                              <p className="name">{section.title}</p>
                            </div>
                          </a>
                        </ul>
                      </div>
                    );
                  })}
                  <p className="menu-label">Help</p>
                  {map(icon2, (section, index) => {
                    return (
                      <div index={index} key={section.id}>
                        <ul className="menu-list">
                          <a href={section.href}>
                            <div className="is-inline-flex">
                              <img
                                className="image is-24x24 proceed-button"
                                src={section.img}
                              />
                              <p className="name">{section.title}</p>
                            </div>
                          </a>
                        </ul>
                      </div>
                    );
                  })}
                </aside>
              </Modal.Card.Body>
            </Modal.Card>
          </Modal>
        </div>
      );
    }
    return null;
  };

  // ======================= VIEWS
  return (
    <>
      {renderCTA()}
      <div className="is-inline-flex top-bar is-absolute">
        <Button
          className="proceed-button is-absolute none-backgound"
          onClick={() => {
            setModal(true);
          }}
        >
          <img className="image is-24x24" src={menu} />
        </Button>
        <img className="auto" src={logo} />
      </div>
      <div className="is-size-5 title">
        <Button className="floating-add-button is-paddingless right">
          <Fab>
            <FabButton className="is-white">
              <p className="has-text-white">+</p>
            </FabButton>
            <FabActions>
              {map(icon, (section, index) => {
                return (
                  <FabAction
                    className="button"
                    index={index}
                    key={section.id}
                    tooltip={section.title}
                  >
                    <a href={section.href}>
                      <img className="icon-action-button" src={section.img} />
                    </a>
                  </FabAction>
                );
              })}
            </FabActions>
          </Fab>
        </Button>
      </div>
      <Columns fullwidth="true">
        <Columns.Column>
          <Columns.Column className="welcome-column">
            <div className="welcome-home">
              <img src={welcomeHome} />
            </div>
            <div className="username is-absolute">
              <p className="is-size-4">Cheong Keng Son</p>
            </div>
          </Columns.Column>
        </Columns.Column>
      </Columns>

      <div className="places smart-devices">
        <div className="is-inline-flex">
          <p className="has-text-dark">Scenes</p>
          <button className="proceed-button none-backgound">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true">
          <Columns.Column>
            <Columns.Column className="is-inline-flex scene-column flex-horizontal-center">
              {map(scene, (section, index) => {
                return (
                  <div className="scenes" index={index} key={section.id}>
                    <p className="number">{section.number}</p>
                    <p className="has-text-centered">{section.scene}</p>
                  </div>
                );
              })}
            </Columns.Column>
          </Columns.Column>
        </Columns>
      </div>

      <div className="places room-area">
        <div className="is-inline-flex">
          <p className="has-text-dark">Rooms</p>
          <button className="proceed-button none-backgound">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true" className="flex-vertical-center">
          <Columns.Column className="is-inline-flex">
            <div>
              {map(rooms, (section, index) => {
                return (
                  <Columns.Column
                    className="room proceed-button room-area-content"
                    index={index}
                    onClick={() => setActive(!active)}
                  >
                    <div className="room-section">
                      {active ? (
                        <img className="room-image" src={section.imgActive} />
                      ) : (
                        <img className="room-image" src={section.img} />
                      )}
                      <div className="caption">
                        <p className="is-size-6 has-text-dark has-text-centered">
                          {section.title}
                        </p>
                      </div>
                    </div>
                  </Columns.Column>
                );
              })}
            </div>
            <div>
              {map(rooms, (section, index) => {
                return (
                  <Columns.Column
                    className="room proceed-button room-area-content"
                    index={index}
                    onClick={() => setActive(!active)}
                  >
                    <div className="room-section">
                      {active ? (
                        <img className="room-image" src={section.imgActive} />
                      ) : (
                        <img className="room-image" src={section.img} />
                      )}
                      <div className="caption">
                        <p className="is-size-6 has-text-dark has-text-centered">
                          {section.title}
                        </p>
                      </div>
                    </div>
                  </Columns.Column>
                );
              })}
            </div>
          </Columns.Column>
        </Columns>
      </div>

      <div className="places area">
        <div className="is-inline-flex">
          <p className="has-text-dark">All Device</p>
          <button className="proceed-button none-backgound">
            <img className="is-16x16" src={proceed} />
          </button>
        </div>

        <Columns fullwidth="true">
          <Columns.Column>
            {map(allDevice, (section, index) => {
              return (
                <Columns.Column
                  className="devices living-room-content"
                  index={index}
                  key={index}
                >
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
                    <div className="right-switch is-absolute">
                      <Switch
                        checked={active}
                        onChange={() => setActive(!active)}
                        onColor="#ffb404"
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
