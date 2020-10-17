import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { Container, Columns } from "react-bulma-components";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const SignIn = (props) => {
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
    <div className="homiez-signup">
      <form>
        <Field>
          <Label>Email Address</Label>
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
          <Label>Password</Label>
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

        <Button
          // loading={submissionLoading}
          type="submit"
          color="primary"
          size={size}
          fullwidth
        >
          Login
        </Button>

        <Link href="/signin">
          <a>Forgot Password?</a>
        </Link>

        <div className="or">
          <p className="has-text-centered has-text-grey-light">or</p>
        </div>

        <Link href="/SignUp">
          <a className="has-text-danger">Don't have an account?</a>
        </Link>

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
