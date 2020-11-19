import map from "lodash/map";
import PropTypes from "prop-types";
import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { fb } from "../../config/firebase-config";
import { Form, Button, Message, Heading, Box } from "react-bulma-components";
import { useForm, Controller, ErrorMessage } from "react-hook-form";
import back from "../../../public/img/back-arrow1.svg";
import contactUs1 from "../../../public/img/contact-us1.svg";
import contactUs2 from "../../../public/img/contact-us2.svg";
import contactUs3 from "../../../public/img/contact-us3.svg";
import contactUs4 from "../../../public/img/contact-us4.svg";
import styles from "./styles";
import { getRooms } from "../../api/queries/query";

const Rooms = () => {
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    getRooms(setRooms);
  });

  return (
    <div className="homiez-rooms">
      <div className="top-bar is-inline-flex">
        <a href="/home">
          <Button className="back-button">
            <img className="image is-24x24" src={back} />
          </Button>
        </a>
        <p className="first-caption is-size-3">Rooms</p>
      </div>
      <Box>
        <p>{rooms.roomName}</p>
      </Box>
      <style jsx>{styles}</style>
    </div>
  );
};

// ======================= PROPS
Rooms.propTypes = {
  size: PropTypes.oneOf(["normal"]),
};

export default Rooms;
