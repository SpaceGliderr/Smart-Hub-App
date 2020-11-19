import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb, auth } from "../../config/firebase-config";
import { Form, Button, Message } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import { Image } from "react-bulma-components";
import SignUpImage from "../../../public/img/sign-up.svg";
import GoogleImage from "../../../public/img/google-icon.svg";
import styles from "./styles";
import {
  createNewAccountEmailPass,
  createNewAccountGoogle,
} from "../../api/queries/query";
import validation from "./validation";
import { useRouter } from "next/router";

const { Field, Control, Input, Select, Label } = Form;

const SignUp = (props) => {
  const { size } = props;
  const router = useRouter();

  const currentDate = new Date();

  const { control, handleSubmit } = useForm({
    validationSchema: validation(),
  });

  const onSubmit = (data) => {
    createNewAccountEmailPass(data);
    console.log(data);
    router.push("/sign-up-2");
  };

  return (
    <div className="homiez-signup">
      <p className="is-size-3 title">Sign Up</p>
      <Image className="has-text-centered image-signup" src={SignUpImage} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label className="has-text-weight-medium">First Name</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="firstName"
              size={size}
              placeholder="First Name"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="firstName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Last Name</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="lastName"
              size={size}
              placeholder="Last Name"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="lastName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
        </Field>

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

        <div className="is-fullwidth is-inline-flex t-and-c">
          <p>
            By signing up, i have read and agree to the
            <a className="has-text-link"> terms and conditions</a>
          </p>
        </div>

        <Button
          // loading={submissionLoading}
          type="submit"
          color="primary"
          size={size}
          fullwidth
        >
          Sign Up
        </Button>

        <div className="divider">OR</div>
      </form>

      <Button
        // loading={submissionLoading}
        className="is-outlined google-button"
        size={size}
        fullwidth
        onClick={createNewAccountGoogle}
      >
        <Image className="has-text-centered google-icon" src={GoogleImage} />
        Sign Up with Google
      </Button>

      <div className="has-text-centered is-fullwidth">
        <p className="has-text-grey">
          Already have an account? <a href="/sign-in">Sign In Now</a>
        </p>
      </div>

      {/* {errorMessage && (
          <Message color="danger">
            <Message.Body>{errorMessage}</Message.Body>
          </Message>
        )} */}
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
SignUp.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default SignUp;
