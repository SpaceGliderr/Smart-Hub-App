import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const AccountDetails = (props) => {
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
    <div className="homiez-account-details">
      <div className="top-bar is-inline-flex">
        <Button className="back-button proceed-button">
          <img className="image is-24x24" src={back} />
        </Button>
        <p className="first-caption is-size-3">Account</p>
      </div>
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
        <Label className="has-text-weight-medium">Gender</Label>
        <Control>
          <Controller
            as={Input}
            control={control}
            name="gender"
            size={size}
            placeholder="Gender"
          />
        </Control>
        {/* <ErrorMessage errors={errors} name="gender">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
      </Field>
      <Field>
        <Label className="has-text-weight-medium">Date of Birth</Label>
        <Control>
          <Controller
            as={Input}
            control={control}
            name="dateOfBirth"
            size={size}
            placeholder="Date of Birth"
          />
        </Control>
        {/* <ErrorMessage errors={errors} name="dateOfBirth">
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
        Edit
      </Button>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
AccountDetails.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AccountDetails;
