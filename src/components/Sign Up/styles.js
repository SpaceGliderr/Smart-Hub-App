import css from "styled-jsx/css";

export default css.global`
  .homiez-signup {
    margin-top: 1.5em;
  }
  .image-signup {
    width: 400px;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  .link {
    width: 100%;
  }
  .t-and-c {
    margin-bottom: 0.5em;
  }
  .divider {
    margin: 1em 0;
  }
  .google-button {
    margin-bottom: 0.5em;
  }
  .google-icon {
    margin-right: 0.5em;
  }
  @media screen and (max-width: 800px) {
    .image-signup {
      width: 248px;
      height: 244px;
    }
  }
`;
