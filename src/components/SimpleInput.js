import { findAllByDisplayValue } from "@testing-library/react";
import { useRef, useState } from "react";
import React, { useEffect } from "react";
import useInput  from "../hooks/use-input";

const SimpleInput = (props) => {



  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value=>value.trim() !== '');
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: mailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHanlder,
    reset:resetEmailInput
  } = useInput(value=>value.trim() !== '' && value.includes('@'));




 // const [enteredEmail, setEnteredEmail] = useState("");
 // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  //const enteredEmailIsValid 
  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    //check others also
    formIsValid = true;
  } //can check age, city... ect.


  function formSubmissionHandler(event) {
    event.preventDefault();


    if (!enteredName.trim()) {
      return;
    }

    console.log(enteredName, enteredEmail);

    //const enteredValue = nameInputRef.current.value;
    //console.log(enteredValue);

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";

  const eMailInputClasses = mailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p> Name must not be empty.</p>}
      </div>
      <div className={eMailInputClasses}>
        <label htmlFor="email">Your E-mail</label>
        <input
          ref={eMailInputRef}
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHanlder}
          value={enteredEmail}
        />
        {mailInputHasError && <p> E-mail must not be empty and include '@'.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
