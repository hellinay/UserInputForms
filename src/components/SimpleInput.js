import { findAllByDisplayValue } from "@testing-library/react";
import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid,setEnteredNameValid]=useState(false)
  const [enteredNameTouched, setEnteredNameTouched]=useState(false)
  
  function nameInputChangeHandler(event) {
    setEnteredName(event.target.value);
   
    if (event.target.value.trim() !== "") {
      setEnteredNameValid(true)
    }

  }

  function nameInputBlurHandler(params) {
    setEnteredNameTouched(true)

    if (enteredName.trim() === "") {
      setEnteredNameValid(false)
    }
  }

  function formSubmissionHandler(event) {
    event.preventDefault();
    setEnteredNameTouched(true)

    if (enteredName.trim() === "") {
      setEnteredNameValid(false)
      
    }

    setEnteredNameValid(true)

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnteredName("");
  }

  const nameInputIsValid= !enteredNameIsValid && enteredNameTouched  

  const nameInputClasses=nameInputIsValid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input

          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
         {nameInputIsValid && <p> Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
