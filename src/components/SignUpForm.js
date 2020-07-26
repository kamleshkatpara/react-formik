import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

function SignUpForm() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Please enter email address"),
    password: Yup.string().required("Please enter password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Please re-enter Password"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form Data", values);
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
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone Number"
              name="phone"
            />
            <FormikControl
              control="button"
              type="submit"
              title="Submit"
              variant="primary"
              size={"lg"}
              disabled={!formik.isValid}
              handleClick={handleClick}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
