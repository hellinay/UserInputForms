import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;


  function valueChangeHandler(event) {
    setEnteredValue(event.target.value);
  }

  function inputBlurHandler(params) {
    setIsTouched(true);

  }

  function reset(params) {
      setEnteredValue('')
      setIsTouched(false)
      
  }
  return {
      value:enteredValue,
      hasError:hasError,
      isValid: valueIsValid,
      valueChangeHandler,
      inputBlurHandler,
      reset

  }
}

export default useInput;
