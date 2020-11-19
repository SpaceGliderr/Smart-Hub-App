import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading, Box } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import contactUs1 from "../../../public/img/contact-us1.svg";
import contactUs2 from "../../../public/img/contact-us2.svg";
import contactUs3 from "../../../public/img/contact-us3.svg";
import contactUs4 from "../../../public/img/contact-us4.svg";
import styles from "./styles";
import { getDevices } from "../../api/queries/query";

const Devices = () => {
  const router = useRouter();

  const [devices, setDevices] = useState("");

  useEffect(() => {
    getDevices(setDevices);
    console.log(devices);
  });

  return (
    <div className="homiez-devices">
      <div className="top-bar is-inline-flex">
        <a href="/home">
          <Button className="back-button">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <p className="first-caption is-size-3">Devices</p>
      </div>
      <Box onClick={() => router.push("/device/" + devices.deviceId)}>
        <p>{devices.deviceName}</p>
        <p>{devices.deviceType}</p>
      </Box>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
Devices.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default Devices;
