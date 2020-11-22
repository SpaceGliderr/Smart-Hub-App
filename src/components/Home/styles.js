import css from "styled-jsx/css";

export default css.global`
  .navbar-menu-in {
    padding: 0;
    animation: fadeInLeft 0.2s ease-in-out;
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  .logo-horizontal {
    padding: 5px;
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
  }
  .user-profile {
    padding: 15px 15px;
    border: 1px solid #f0f0f0;
    box-shadow: 2px 3px 2px 2px #f0f0f0;
    margin-bottom: 1em;
  }
  .welcome-column {
    position: relative;
    width: 100%;
    margin-right: 2px;
    padding: 5px;
    margin-top: 5px;
    height: 108px;
    border: 2px solid #dddddd;
    box-sizing: border-box;
    border-radius: 10px;
    color: white;
    background-image: url(./img/gradient.svg);
  }
  .welcome-home {
    margin-left: -0.4em;
    margin-top: 0.1em;
  }
  @media screen and (min-width: 501px) {
    .welcome-column {
      color: black;
      background-image: none;
    }
  }
  .username {
    margin: 0;
    top: 50%;
    left: 50%;
    margin-right: -100%;
    transform: translate(-50%, -50%);
  }
  .scene-column {
    width: 100%;
  }
  .scenes {
    width: 53px;
    height: 53px;
    background: #f7fff7;
    border-radius: 100px;
    margin-bottom 2em;
    margin-right: 0.7em;
  }
  .number {
    height 100%;
  }
  .is-absolute {
    position: absolute;
  }
  .top-bar {
    left: 0;
    right: 0;
    padding-bottom: 1.5em;
    margin: 1em 0;
    position: sticky;
    width: 100%;
    box-shadow: 0 0.7px #e4e4e4;
  }
  .full-height {
    height: 110em;
  }
  .modal-card {
    max-height: calc(100vh);
  }
  .left {
    height: 100%;
    width: 18em;
    left: 0em;
    margin-left: 0;
    margin-right: auto;
  }
  .auto {
    margin-left: auto;
    margin-right: auto;
  }
  .right {
    right: 1.8em;
  }
  .greetings {
    margin-top: 1em;
  }
  .name {
    margin-top: 0.5em;
  }
  .places {
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .smart-devices {
    background: #bee3db;
  }
  .smart-device-content {
    background: #f7fff7;
  }
  .living-room-content {
    background: #fff9e9;
  }
  .none-backgound {
    border: none;
    background: none;
  }
  .proceed-button {
    margin-top: 5px;
  }
  .devices {
    width: 100%;
    margin-right: 2px;
    padding: 5px;
    margin-top: 5px;
    height: 57px;
    border: 2px solid #dddddd;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .image {
    margin-right: 10px;
    max-height: 46px;
  }
  .room {
    width: 154px;
    height: 94px;
    left: 27px;
    top: 533px;
    background: #ddffff;
    border: 2px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .room-image {
    margin-bottom: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }
  .right-switch {
    right: 2.8em;
    margin-top: 0.8em;
  }
  .area {
    background: #fbe5c4;
  }
  .room-area {
    background: #63E2DA;
  }
  .kitchen {
    background: #fbfca4;
  }
  .floating-add-button {
    right: 3em;
    bottom: 3em;
    position: fixed;
    border-radius: 50%;
    z-index: 9999;
  }
  .fab-button {
    background-color: #00d1b2;
  }
  .fab-button:hover {
    background-color: #00d1b2;
  }
  .fab-action {
    background: white;
  }
  .icon-action-button {
    min-height: 16px;
    min-width: 16px;
  }
`;
