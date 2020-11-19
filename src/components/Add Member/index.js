import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import logo from "../../../public/img/logo-only.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const AddMember = (props) => {
  const { size } = props;

  const [checked, setChecked] = useState("checked");

  const { control, handleSubmit } = useForm({
    validationSchema: validation(),
  });

  const onSubmit = (data) => {};

  return (
    <div>
      <div className="is-inline-flex top-bar is-absolute">
        <a href="/home">
          <Button className="proceed-button is-absolute none-backgound">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <img className="center auto" src={logo} />
      </div>
      <p className="is-size-3 has-text-weight-medium Title">Add a Member</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label className="has-text-weight-medium">Name</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="name"
              size={size}
              placeholder="His/Her Name"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Email</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="email"
              size={size}
              placeholder="His/Her email used to log in this application"
            />
          </Control>
        </Field>

        <Field className="is-inline-flex is-fullwidth">
          <p className="has-text-weight-medium">Make it as a host? </p>
          <div className="field is-absolute auto right">
            <input
              className="is-checkradio is-success"
              type="checkbox"
              name="exampleCheckboxNormal"
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </Field>

        <Button type="submit" color="primary" size={size} fullwidth disabled>
          Finish
        </Button>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
AddMember.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AddMember;
