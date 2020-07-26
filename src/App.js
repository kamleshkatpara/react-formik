import React from "react";
import "./App.css";
import YoutubeForm from "./components/YoutubeForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import EnrollmentForm from "./components/EnrollmentForm";
import { theme, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <SignUpForm /> */}
        <EnrollmentForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
