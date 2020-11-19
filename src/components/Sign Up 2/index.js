import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import styles from "./styles";
import { createAdditionalAccountDetails } from "../../api/queries/query";
import { useRouter } from "next/router";
import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const SignUp2 = (props) => {
  const { size } = props;
  const router = useRouter();

  const currentDate = new Date();
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notification, setNotification] = useState("");

  const { control, handleSubmit } = useForm({
    validationSchema: validation(),
  });

  const onSubmit = (data) => {
    console.log(data);
    createAdditionalAccountDetails(data);
    router.push("/on-boarding");
  };

  return (
    <div className="homiez-signup-2">
      <p className="is-size-3 has-text-weight-medium">
        Let’s get to know you better!
      </p>
      <div className="has-text-grey is-size-7 bottom-caption">
        <p>
          Before we proceed, we would like to know a little more about you so
          that we can personalize the application more to your liking. Note that
          the following questions can be skipped, and are not required to
          utilize the application.
        </p>
      </div>
      <div className="is-fullwdith has-text-link has-text-right">
        <a> Skip Account Setup</a>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field>
            <Label className="has-text-weight-medium">Gender</Label>
            <Control>
              <Controller
                as={
                  <Select
                    value={value}
                    className="custom-select"
                    size="medium"
                    fullWidth
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </Select>
                }
                control={control}
                name="gender"
                size={size}
                placeholder="Gender"
              />
            </Control>
            {/* <ErrorMessage errors={errors} name="firstName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
          </Field>

          <Field>
            <Label className="has-text-weight-medium">Date of Birth</Label>
            <Control>
              <Controller
                as={<DatePicker value={value} activeStartDate={currentDate} />}
                control={control}
                name="dob"
                size={size}
                placeholder="Last Name"
              />
            </Control>
            {/* <ErrorMessage errors={errors} name="lastName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
          </Field>
        </div>

        <Field>
          <Label className="has-text-weight-medium">
            How many rooms in your home contain smart appliances?
          </Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="roomAmount"
              size={size}
              placeholder="Enter amount"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="email">
                    {({ message }) => <Help color="danger">{message}</Help>}
                </ErrorMessage> */}
        </Field>

        <Field>
          <Label className="has-text-weight-medium">
            How many smart appliances do you wish to connect?
          </Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="deviceAmount"
              size={size}
              placeholder="Enter amount"
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
          Sign Up
        </Button>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
SignUp2.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default SignUp2;
