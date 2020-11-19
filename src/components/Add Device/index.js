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

const AddDevice = (props) => {
  const { size } = props;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [value, setValue] = useState("");

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
      <p className="is-size-3 has-text-weight-medium Title">Add a Device</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label className="has-text-weight-medium">Type</Label>
          <Control>
            <Controller
              as={
                <Select
                  value={value}
                  className="custom-select is-fullwidth"
                  size="medium"
                  fullWidth
                >
                  <option value="Male">Smart Light</option>
                  <option value="Female">Refridgerator</option>
                  <option value="Others">Air Condition</option>
                  <option value="Others">Robot Vacuum</option>
                  <option value="Others">Smart Home</option>
                </Select>
              }
              control={control}
              name="deviceType"
              size={size}
              placeholder="Model"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Brand</Label>
          <Control>
            <Controller
              as={
                <Select
                  value={value}
                  className="custom-select is-fullwidth"
                  size="medium"
                  fullWidth
                >
                  <option value="Homiez">Homiez</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Amazon">Amazon</option>
                  <option value="Nest">Nest</option>
                  <option value="Google">Google</option>
                  <option value="Philips">Philips</option>
                </Select>
              }
              control={control}
              name="deviceBrand"
              size={size}
              placeholder="Model"
            />
          </Control>
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Series</Label>
          <Control>
            <Controller
              as={
                <Select
                  value={value}
                  className="custom-select is-fullwidth"
                  size="medium"
                >
                  <option value="Male">Google Home Mini</option>
                  <option value="Female">Google Home Max</option>
                  <option value="Others">Google Nest</option>
                </Select>
              }
              control={control}
              name="deviceSeries"
              size={size}
              placeholder="Model"
            />
          </Control>
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
AddDevice.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default AddDevice;
