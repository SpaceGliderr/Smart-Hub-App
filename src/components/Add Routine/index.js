import PropTypes from "prop-types";
import React, { useState } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button } from "react-bulma-components";
import { useForm, Controller } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import logo from "../../../public/img/logo-only.svg";
import proceed from "../../../public/img/proceed-button.svg";
import styles from "./styles";

import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const AddRoutine = (props) => {
  const { size } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");

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
    <div className="homiez-add-room">
      <div className="is-inline-flex top-bar is-absolute">
        <a href="/home">
          <Button className="proceed-button is-absolute none-backgound">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <img className="center auto" src={logo} />
      </div>
      <p className="is-size-3 has-text-weight-medium title">Add a Routine</p>
      <form>
        <Field>
          <Label className="has-text-weight-medium">Time On</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="room name"
              size={size}
              placeholder="Set a time"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Time Off</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="room name"
              size={size}
              placeholder="Set a time"
            />
          </Control>
        </Field>

        <Field className="is-inline-flex is-fullwidth">
          <p className="has-text-weight-medium">Repeat</p>
          <button className="proceed-button none-backgound auto right is-absolute">
            <img className="is-16x16" src={proceed} />
          </button>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">
            Which smart home device you would like to be added into this room?
          </Label>
          <Control>
            <Controller
              as={
                <Select
                  value={value}
                  className="custom-select"
                  size="medium"
                  fullWidth
                >
                  <option value="Male">Google Home Mini</option>
                  <option value="Female">Google Home Max</option>
                  <option value="Others">Philip Hue</option>
                </Select>
              }
              control={control}
              name="type of devices"
              size={size}
              placeholder="Model"
            />
          </Control>
        </Field>

        <Button type="submit" color="primary" size={size} fullwidth>
          Finish
        </Button>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
AddRoutine.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AddRoutine;
