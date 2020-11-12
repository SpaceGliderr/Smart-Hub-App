import css from "styled-jsx/css";

export default css.global`
  .top-bar {
    position: absolute;
    left: 0;
    right: 0;
    padding-bottom: 1.5em;
    margin: 1em 0;
    position: sticky;
    width: 100%;
    box-shadow: 0 0.7px #e4e4e4;
  }
  .menu-button {
    position: absolute;
    border: none;
    background: none;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .right {
    position: absolute;
    right: 1.8em;
    margin-left: auto;
    margin-right: auto;
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
  .proceed-button {
    margin-top: 5px;
    border: none;
    background: none;
  }
  .devices {
    width: 100%;
    margin-right: 2px;
    padding: 5px;
    margin-top: 5px;
    height: 57px;
    background: #f7fff7;
    border: 2px solid #dddddd;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .image {
    margin-right: 5px;
    max-height: 46px;
  }
  .right-switch {
    position: absolute;
    right: 2.8em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.8em;
  }
  .area {
    background: #fbe5c4;
  }
  .kitchen {
    background: #fbfca4;
  }
`;
