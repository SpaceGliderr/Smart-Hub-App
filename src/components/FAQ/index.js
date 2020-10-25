import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import expandDown from "../../../public/img/expand-arrow-down.svg";
import expandUp from "../../../public/img/expand-arrow-up.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const FAQ = (props) => {
  const { size } = props;

  const currentDate = new Date();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");
  const [display, setDisplay] = useState(true);

  const data = [
    {
      title: "Will my devices be accessible to outsiders?",
      desc:
        "No. For strangers to connect to your house and view your appliances, they would have to obtain approval from the Owner.",
    },
    {
      title: "Can my devices be modified by other users in the house?",
      desc:
        "Depending on what role the Owner assigns to the users, they have different permissions. For example, a user with the Guest role cannot change the settings of your device. A user with the Family role will be able to.",
    },
    {
      title: "Will there be in-app purchases in the future?",
      desc:
        "It will, once there are more integration or more collaboration between us and other vendors, some will become paid exclusive",
    },
  ];

  const data1 = [
    {
      title: "Can this application support different devices?",
      desc:
        "Yes. Our application supports connections of different smart devices from different manufacturers. However,  the number of functions may be limited.",
    },
    {
      title: "Is this application usable on multiple platforms?",
      desc:
        "Depending on what role the Owner assigns to the users, they have different permissions. For example, a user with the Guest role cannot change the settings of your device. A user with the Family role will be able to.",
    },
    {
      title: "What brands does this application support?",
      desc:
        "Every kind of brands, if not, we will try and include in as fast as possible as we put our priorities at customers ",
    },
  ];

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
    <div className="homiez-account-details">
      <div className="top-bar is-inline-flex">
        <Button className="back-button">
          <img className="image is-24x24" src={back} />
        </Button>
        <p className="first-caption is-size-3">FAQ</p>
      </div>
      <p className="is-size-4 has-text-weight-medium section-title">General</p>
      {map(data, (caption, index) => {
        return (
          <div index={index} key={index}>
            <div className="is-inline-flex section-description">
              <p className="is-size-6 has-text-weight-medium">
                {caption.title}
              </p>
              <div
                role="presentation"
                className="is-inline-flex"
                onClick={() => setDisplay(!display)}
                style={{ cursor: "pointer" }}
              >
                {!display && (
                  <div className="is-flex">
                    <Button className="back-button right">
                      <img className="image is-16x16" src={expandUp} />
                    </Button>
                  </div>
                )}
                {display && (
                  <div className="is-flex">
                    <Button className="back-button right">
                      <img className="image is-16x16" src={expandDown} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className={classnames({ "is-hidden": display })}>
              <article className="message is-info">
                <div className="message-body">
                  <p className="is-size-6">{caption.desc}</p>
                </div>
              </article>
            </div>
          </div>
        );
      })}
      <p className="is-size-4 has-text-weight-medium section-title">
        Application
      </p>
      {map(data1, (caption, index) => {
        return (
          <div index={index} key={index}>
            <div className="is-inline-flex section-description">
              <p className="is-size-6 has-text-weight-medium">
                {caption.title}
              </p>
              <div
                role="presentation"
                className="is-inline-flex"
                onClick={() => setDisplay(!display)}
                style={{ cursor: "pointer" }}
              >
                {!display && (
                  <div className="is-flex">
                    <Button className="back-button right">
                      <img className="image is-16x16" src={expandUp} />
                    </Button>
                  </div>
                )}
                {display && (
                  <div className="is-flex">
                    <Button className="back-button right">
                      <img className="image is-16x16" src={expandDown} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <div className={classnames({ "is-hidden": display })}>
              <article className="message is-info">
                <div className="message-body">
                  <p className="is-size-6">{caption.desc}</p>
                </div>
              </article>
            </div>
          </div>
        );
      })}
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
FAQ.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default FAQ;
