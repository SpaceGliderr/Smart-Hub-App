import css from "styled-jsx/css";

export default css.global`
  .vector {
    position: absolute;
    left: 0;
    right: 0;
  }
  .vector-top {
    top: 0;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .logo {
    margin-top: 8em;
    height: 125px;
    width: 119px;
  }
  .get-started {
    margin-top: 2em;
    width: 298px;
    height: 181px;
  }
  .vector-bottom {
    bottom: 0;
  }
  .get-started-button {
    margin: 1em 0;
  }
  @media screen and (min-width: 700px) {
    .vector {
      display: none;
    }
  }
  @media screen and (max-width: 360px) {
    .logo {
      margin-top: 6em;
      height: 75px;
      width: 69px;
    }
    .get-started {
      margin-top: 1em;
      width: 248px;
      height: 131px;
    }
    .get-started-button {
      margin-top: 2em;
    }
  }
`;
