import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import Switch from "react-switch";
import back from "../../../public/img/back-arrow1.svg";
import userProfile from "../../../public/img/visit-profile-arrow.svg";
import proceed from "../../../public/img/proceed-button.svg";
import trash from "../../../public/img/delete-trash-red.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const Settings = (props) => {
  const { size } = props;

  const currentDate = new Date();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [change, setChange] = useState("");
  const [checked, setChecked] = useState(false);
  const [notification, setNotification] = useState("");

  const { control } = useForm({
    validationSchema: validation(),
  });

  const handleSubmit = (event) => {
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
    <div className="homiez-settings">
      <div className="top-bar is-inline-flex">
        <Button className="back-button proceed-button">
          <img className="image is-24x24" src={back} />
        </Button>
        <p className="first-caption is-size-3">Settings</p>
      </div>
      <div>
        <aside className="menu">
          <p className="menu-label">Profile</p>
          <ul className="menu-list">
            <div className="user-profile">
              <div className="is-inline-flex name">
                <p className="has-text-weight-medium">Nicholas Lee</p>
                <Button className="right back-button proceed-button">
                  <img className="image is-32x32" src={userProfile} />
                </Button>
              </div>
              <p className="has-text-grey">nilchyyy@gmail.com</p>
            </div>
          </ul>
          <p className="menu-label">Preferences</p>
          <ul className="menu-list">
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Location Tracking</a>
                <div className="right toggle-button">
                  <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
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
            </li>
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Use data when Wi-Fi is unavailable</a>
                <div className="right toggle-button">
                  <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
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
            </li>
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Hide me from other users</a>
                <div className="right toggle-button">
                  <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
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
            </li>
          </ul>
          <p className="menu-label">Notifications</p>
          <ul className="menu-list">
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Notifications</a>
                <div className="right toggle-button">
                  <Switch
                    checked={checked}
                    onChange={() => setChecked(!checked)}
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
            </li>
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Manage Notification</a>
                <div className="right">
                  <Button className="proceed-button">
                    <img className="image" src={proceed} />
                  </Button>
                </div>
              </div>
            </li>
          </ul>
          <p className="menu-label">Personal Data</p>
          <ul className="menu-list">
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Privacy Policy</a>
                <div className="right">
                  <Button className="proceed-button">
                    <img className="image" src={proceed} />
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <div className="is-inline-flex is-full-width">
                <a>Download Personal Data</a>
                <div className="right">
                  <Button className="proceed-button">
                    <img className="image" src={proceed} />
                  </Button>
                </div>
              </div>
            </li>
            <li>
              <div className="is-inline-flex is-full-width">
                <a className="has-text-danger">Delete all device data</a>
                <div className="right">
                  <Button className="proceed-button">
                    <img className="image" src={trash} />
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
Settings.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default Settings;
