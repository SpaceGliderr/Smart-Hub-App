import map from "lodash/map";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Switch from "react-switch";
import { fb } from "../../config/firebase-config";
import { Form, Button, Columns } from "react-bulma-components";
import { useForm, Controller } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import logo from "../../../public/img/logo-only.svg";
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

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const AddScene = (props) => {
  const { size } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const { control, handleSubmit } = useForm({
    validationSchema: validation(),
  });

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

  const onSubmit = (event) => {
    event.preventDefault();

    fb.firestore().collection("Test").add({
      title: title,
      content: content,
    });

    setTitle("");
    setContent("");

    setNotification("Created Notification");

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  return (
    <div className="homiez-add-room">
      <div className="is-inline-flex top-bar is-absolute">
        <a href="/home">
          <Button className="proceed-button is-absolute none-backgound">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <img className="center auto" src={logo} />
      </div>
      <p className="is-size-3 has-text-weight-medium ">Add a Scene</p>
      <div className="has-text-grey is-size-6 bottom-caption">
        <p>Add a scene to have pre-selected device to be on /off</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label className="has-text-weight-medium">Scene Name</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="sceneName"
              size={size}
              placeholder="Enter scene name"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Select Devices</Label>
          <div className="places area">
            <div className="is-inline-flex">
              <p className="has-text-dark">Living Room</p>
              <button className="proceed-button none-backgound">
                <img className="is-16x16" src={proceed} />
              </button>
            </div>
            <Columns fullwidth="true">
              <Columns.Column>
                {map(smartDevice, (section, index) => {
                  return (
                    <Columns.Column
                      className="devices smart-device-content"
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
                          <p className="is-size-6 has-text-dark">
                            {section.title}
                          </p>
                          {active ? (
                            <p className="has-text-success is-size-7">On</p>
                          ) : (
                            <p className="has-text-grey-light is-size-7">Off</p>
                          )}
                        </div>
                        <div className="right-switch auto is-absolute">
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
              <button className="proceed-button none-backgound">
                <img className="is-16x16" src={proceed} />
              </button>
            </div>

            <Columns fullwidth="true">
              <Columns.Column>
                {map(room, (section, index) => {
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
                          <p className="is-size-6 has-text-dark">
                            {section.title}
                          </p>
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
          <div className="places kitchen">
            <div className="is-inline-flex">
              <p className="has-text-dark">Kitchen</p>
              <button className="proceed-button none-backgound">
                <img className="is-16x16" src={proceed} />
              </button>
            </div>

            <Columns fullwidth="true">
              <Columns.Column>
                {map(kitchenDevice, (section, index) => {
                  return (
                    <Columns.Column
                      className="devices kitchen-content"
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
                          <p className="is-size-6 has-text-dark">
                            {section.title}
                          </p>
                          {active ? (
                            <p className="has-text-success is-size-7">On</p>
                          ) : (
                            <p className="has-text-grey-light is-size-7">Off</p>
                          )}
                        </div>
                        <div className="right-switch is-absolute">
                          <Switch
                            checked={active}
                            onChange={() => setActive(!active)}
                            onColor="#e7e300"
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
        </Field>

        <Button
          className="finish-button"
          type="submit"
          color="primary"
          size={size}
          fullwidth
          disabled
        >
          Finish
        </Button>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
AddScene.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AddScene;
