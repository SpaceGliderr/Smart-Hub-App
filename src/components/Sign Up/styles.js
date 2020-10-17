import css from "styled-jsx/css";

export default css.global`
  @media screen and (max-width: 800px) {
    .sex {
      padding-right: 0;
    }
    .password {
      margin-bottom: 3rem;
    }
    .columns:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;