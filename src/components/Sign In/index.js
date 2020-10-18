import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { Image } from "react-bulma-components";
import SignInImage from "../../../public/img/sign-in.svg";
import GoogleImage from "../../../public/img/google-icon.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const SignIn = (props) => {
  const { size } = props;

  const currentDate = new Date();
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
    <div className="homiez-signin">
      <p className="is-size-3 title">Sign In</p>
      <Image className="has-text-centered image-signin" src={SignInImage} />
      <form>
        <Field>
          <Label className="has-text-weight-medium">Email</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="email"
              size={size}
              placeholder="Email"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="email">
                    {({ message }) => <Help color="danger">{message}</Help>}
                </ErrorMessage> */}
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Password</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="password"
              type="password"
              size={size}
              placeholder="Password"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="password">
                            {({ message }) => <Help color="danger">{message}</Help>}
                        </ErrorMessage> */}
        </Field>

        <div className="has-text-right is-fullwidth forgot-password">
          <a href="/">Forgot Password?</a>
        </div>

        <Button
          // loading={submissionLoading}
          type="submit"
          color="primary"
          size={size}
          fullwidth
        >
          Log In
        </Button>

        <div className="divider">OR</div>

        <Button
          // loading={submissionLoading}
          className="is-outlined google-button"
          type="submit"
          size={size}
          fullwidth
        >
          <Image className="has-text-centered google-icon" src={GoogleImage} />
          Log In with Google
        </Button>

        <div className="has-text-centered is-fullwidth">
          <p className="has-text-grey">
            Don't have an account? <a href="/sign-up">Sign Up Now</a>
          </p>
        </div>

        {/* {errorMessage && (
          <Message color="danger">
            <Message.Body>{errorMessage}</Message.Body>
          </Message>
        )} */}
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
SignIn.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default SignIn;
