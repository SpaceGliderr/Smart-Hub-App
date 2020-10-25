import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import contactUs1 from "../../../public/img/contact-us1.svg";
import contactUs2 from "../../../public/img/contact-us2.svg";
import contactUs3 from "../../../public/img/contact-us3.svg";
import contactUs4 from "../../../public/img/contact-us4.svg";
import styles from "./styles";

import validation from "./validation";

const ContactUs = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");
  const [display, setDisplay] = useState(true);

  const data = [
    {
      pic: contactUs1,
      title: "Documentation",
      desc:
        "Need help with using the application? Go through our documentation <a>here</a>.",
      desc2:
        "Can’t find what you’re looking for in the documentation? Try our YouTube playlist instead.",
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
    <div className="homiez-contact-us">
      <div className="top-bar is-inline-flex">
        <Button className="back-button">
          <img className="image is-24x24" src={back} />
        </Button>
        <p className="first-caption is-size-3">Contact Us</p>
      </div>
      <div className="contact-us">
        <img className="center" src={contactUs1} />
        <p className="has-text-centered is-size-4 has-text-weight-medium content">
          Documentation
        </p>
        <p className="has-text-centered is-size-7 content">
          Need help with using the application? Go through our documentation
          <a> here</a>.
        </p>
        <p className="has-text-centered is-size-7">
          Can’t find what you’re looking for in the documentation? Try our
          YouTube <a>playlist</a> instead.
        </p>
      </div>
      <div className="contact-us">
        <img className="center" src={contactUs2} />
        <p className="has-text-centered is-size-4 has-text-weight-medium content">
          Support
        </p>
        <p className="has-text-centered is-size-7 content">
          Got more questions? Drop us an enquiry here:
        </p>
        <div className="has-text-centered is-size-7">
          <p>
            <b>Phone:</b> <a href="tel:011-51398758">011-51398758</a>
          </p>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto: homiez@example.com">homiez@support.com</a>
          </p>
          <p>
            <b>Socials:</b>{" "}
            <a href="https://www.instagram.com/homiez777/?hl=en">@HomiezMY</a>
          </p>
        </div>
      </div>
      <div className="contact-us">
        <img className="center" src={contactUs3} />
        <p className="has-text-centered is-size-4 has-text-weight-medium content">
          Collaboration
        </p>
        <p className="has-text-centered is-size-7 content">
          Are you a smart home company? A hungry entrepreneur starting a new
          smart home company? Wish to collaborate with us?
        </p>
        <p className="has-text-centered is-size-7">
          Send us an email at
          <a href="mailto: homiez@example.com"> homiez@collab.com</a> now!
        </p>
      </div>
      <div className="contact-us">
        <img className="center" src={contactUs4} />
        <p className="has-text-centered is-size-4 has-text-weight-medium content">
          GitHub
        </p>
        <p className="has-text-centered is-size-7 content">
          This is an open source project. If you are a developer wishing to add
          on to our growing codebase, feel free to checkout our repository{" "}
          <a href="https://github.com/SpaceGliderr/Smart-Hub-App">here</a> and
          join our ever growing community of developers today!
        </p>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
ContactUs.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default ContactUs;
