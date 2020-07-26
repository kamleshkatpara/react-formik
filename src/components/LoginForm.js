import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="button"
              type="submit"
              title="Submit"
              disabled={!formik.isValid}
              handleClick={handleClick}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
