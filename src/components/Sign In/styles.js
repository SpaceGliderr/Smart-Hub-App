import css from "styled-jsx/css";

export default css.global`
  .or {
    margin-top: -1.5em;
  }
  .forget-password {
    margin-top: 2em;
  }
  .sign-up-message {
    margin-top: 0.1em;
  }
  @media screen and (max-width: 800px) {
    .sex {
      padding-right: 0;
    }
    .password {
      margin-bottom: 1rem;
    }
    .or {
      margin-top: -0.5em;
    }
    .columns:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;