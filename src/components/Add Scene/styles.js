import css from "styled-jsx/css";

export default css.global`
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
  .none-backgound {
    border: none;
    background: none;
  }
  .proceed-button {
    margin-top: 5px;
  }
  .gender {
    margin-right: 1em;
  }
  select,
  option {
    width: 20em;
  }
  select:focus {
    width: 20em;
  }
  option {
    width: 20em;
  }
  .bottom-caption {
    margin-bottom: 0.5em;
  }
  .places {
    padding: 10px;
    left: 17px;
    right: 17px;
    top: 199px;
    border-radius: 10px;
    margin-bottom: 10px;
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
  .right-switch {
    right: 2.8em;
    margin-top: 0.8em;
  }
  .finish-button {
    right: 0em;
    bottom: 0;
    position: fixed;
    z-index: 9999;
  }
`;
