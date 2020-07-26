import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckBoxGroup from "./CheckBoxGroup";
import DatePicker from "./DatePicker";
import Button from "./Button";
import ChakraInput from "./ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "button":
      return <Button {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
