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

const AddRoom = (props) => {
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
      <p className="is-size-3 has-text-weight-medium">Add a New Room</p>
      <form>
        <Field>
          <Label className="has-text-weight-medium">Room Name</Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="room name"
              size={size}
              placeholder="Enter room name"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">
            How many rooms in your home contain smart appliances?
          </Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="amount"
              size={size}
              placeholder="Choose an amount"
            />
          </Control>
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

        <Field>
          <Label className="has-text-weight-medium">
            How many smart appliances do you wish to connect?
          </Label>
          <Control>
            <Controller
              as={Input}
              control={control}
              name="amount"
              size={size}
              placeholder="Choose an amount"
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
AddRoom.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AddRoom;
