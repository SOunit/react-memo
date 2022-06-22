import React from "react";
import FormWithRadioButtons from "../components/FormWithRadioButtons";
import RadioButtons from "../components/RadioButtons";
import StyledRadioButtons from "../components/StyledRadioButtons";

const RadioButtonWithForm = () => {
  return (
    <div>
      <h1>RadioButton</h1>
      <p>
        https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
      </p>
      <h2>pattern1</h2>
      <RadioButtons />
      <h2>pattern2</h2>
      <FormWithRadioButtons />
      <h2>pattern3</h2>
      <StyledRadioButtons />
    </div>
  );
};

export default RadioButtonWithForm;
