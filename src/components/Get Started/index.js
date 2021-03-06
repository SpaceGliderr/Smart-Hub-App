import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router";
import { fb } from "../../config/firebase-config";
import { Button } from "react-bulma-components";
import { useForm } from "react-hook-form";
import { Image } from "react-bulma-components";
import VectorTop from "../../../public/img/get-started-top.svg";
import Logo from "../../../public/img/logo.svg";
import GetStartedImage from "../../../public/img/get-started.svg";
import VectorBottom from "../../../public/img/get-started-bottom.svg";
import styles from "./styles";

import validation from "./validation";

const GetStarted = (props) => {
  const { size } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    <div>
      <div>
        <Image className="vector vector-top" src={VectorTop} />
      </div>
      <Image className="center logo" src={Logo} />
      <Image className="center get-started" src={GetStartedImage} />
      <a href="/sign-up">
        <Button
          className="get-started-button"
          // loading={submissionLoading}
          type="submit"
          color="primary"
          size={size}
          fullwidth
        >
          Get Started
        </Button>
      </a>
      <div className="has-text-centered is-fullwidth">
        <p className="has-text-grey">
          Already have an account? <a href="/sign-in">Sign In Now</a>
        </p>
      </div>
      <Image className="vector vector-bottom is-bottom" src={VectorBottom} />
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
GetStarted.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default GetStarted;
