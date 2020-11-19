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
  .menu-label:not(:last-child) {
    margin-bottom: 0;
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
  .center {
    display: block;
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
    left: 17px;
    right: 17px;
    top: 199px;
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
  .kitchen-content {
    background: #fcffec;
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
  .right-switch {
    right: 2.8em;
    margin-top: 0.8em;
  }
  .area {
    background: #fbe5c4;
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
