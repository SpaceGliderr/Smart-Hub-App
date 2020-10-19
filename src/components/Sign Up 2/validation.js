import * as yup from "yup";

export default () =>
  yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is requires"),
    email: yup.string().email("Wrong Format").required("Email is required"),
    password: yup.string().required("Password is required"),
  });