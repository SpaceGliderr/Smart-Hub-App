import Link from "next/link";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Form, Button, Message } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import styles from "./styles";
import { controlLightStrip } from "../../api/queries/query";
import { useRouter } from "next/router";
import Slider from "rc-slider";
import { SketchPicker } from "react-color";
import back from "../../../public/img/back-arrow1.svg";
// import validation from "./validation";

const { Field, Control, Input, Select, Label } = Form;

const LightStrip = (props) => {
  const { size, id } = props;
  const router = useRouter();

  const [brightness, setBrightness] = useState(10);
  const [background, setBackground] = useState("#ffffff");
  const [lightColor, setLightColor] = useState([255, 255, 255]);
  const [lightMode, setLightMode] = useState(1);

  const { control, handleSubmit } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
    controlLightStrip({
      id: id,
      brightness: brightness,
      color: lightColor,
      lightMode: data.lightMode,
    });
    router.push("/home");
  };

  const onSliderChange = (val) => {
    setBrightness(val);
    console.log(brightness);
  };

  const onColorChange = (color) => {
    setBackground(color.hex);
    setLightColor([color.rgb.r, color.rgb.g, color.rgb.b]);
    console.log(lightColor);
  };

  return (
    <div className="homiez-light-strip">
      <div className="top-bar is-inline-flex">
        <a href="/home">
          <Button className="back-button proceed-button">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <p className="first-caption is-size-3">Devices</p>
      </div>
      <p className="is-size-3 has-text-weight-medium">Ambient Light Strip</p>
      <div className="has-text-grey is-size-7 bottom-caption">
        <p>Control everything about your smart device here!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label className="has-text-weight-medium">Brightness</Label>
          <Slider
            min={0}
            max={100}
            value={brightness}
            onChange={onSliderChange}
            railStyle={{
              height: 10,
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: 2,
              marginTop: -8,
              backgroundColor: "#00D1B2",
              border: 0,
            }}
            trackStyle={{
              background: "#00D1B2",
              height: 10,
            }}
          />
          {/* <ErrorMessage errors={errors} name="firstName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Color</Label>
          <SketchPicker color={background} onChangeComplete={onColorChange} />
          {/* <ErrorMessage errors={errors} name="lastName">
                {({ message }) => <Help color="danger">{message}</Help>}
              </ErrorMessage> */}
        </Field>

        <Field>
          <Label className="has-text-weight-medium">Modes</Label>
          <Control>
            <Controller
              as={
                <Select
                  defaultValue={1}
                  value={lightMode}
                  className="light-mode is-fullwidth"
                  size="medium"
                >
                  <option value={0}>Turn Off</option>
                  <option value={1}>Solid Color</option>
                  <option value={2}>Rainbow</option>
                  <option value={3}>Rainbow with Glitter</option>
                  <option value={4}>Confetti</option>
                  <option value={5}>Sinelon</option>
                  <option value={6}>Juggle</option>
                  <option value={7}>Pulsate</option>
                </Select>
              }
              control={control}
              name="lightMode"
              size={size}
              placeholder="Gender"
            />
          </Control>
          {/* <ErrorMessage errors={errors} name="email">
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
          Save Changes
        </Button>
      </form>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
LightStrip.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default LightStrip;
