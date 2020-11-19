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
`;
