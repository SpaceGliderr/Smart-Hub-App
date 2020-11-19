import css from "styled-jsx/css";

export default css.global`
  .homiez-get-started {
    overflow-x:auto;
  }
  .top-bar {
    position: absolute;
    left: 0;
    right: 0;
    padding-bottom: 1.5em;
    margin-top: 1em;
    position: sticky;
    width: 100%;
    box-shadow: 0 0.7px #e4e4e4;
  }
  .top-button {
    position: absolute;
    right: 0;
  }
  .per-page {
    width: 110%;
    z-index -1;
  }
  .image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    min-height: 290px;
    max-height: 35vh;
  }
  .carousel {
    margin-right: 1em;
    margin-left: 0;
  }
  .title {
    margin: 50px 0;
  }
  .bottom-bar {
    position: absolute;
    left: 1em;
    right: 0;
    bottom: 2em;
    margin-top: 3em;
    display: block;
    margin-right: auto;
    margin-right: auto;
  }
  .carousel__dot {
    border-style: solid;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 15px;
    background-color: #ffffff;
    border-width: 0.5px;
    border-color: hsl(0, 0%, 80%);
  }
  .carousel__dot--selected {
    background-color: #33d8bf;
  }
  .l-col {
    width: 30%;
  }
  .r-col {
    width: 30%;
  }
  .desc {
    min-height: 100px;
  }
  button {
    border: none;
    background-color: transparent;
  }
  .react-loading-skeleton {
    min-height: 34.5vh;
    background-color: #ffffff00;
    background-image: none;
  }
`;
