import react, { useEffect, useState } from "react";
import { header, buttons, words } from "./Header.css";
import App from "../App";
import './Login.css';
import './New login.css';


function Login() {
  const [MobileNum, setMobileNum] = useState("");
  const [Password, setPassword] = useState("");
  const [FormValid, setFormValid] = useState(false);
  const [NumTouched, setNumTouched] = useState(false);
  const [PassTouched, setPassTouched] = useState(false);
  let MobileIsValid = MobileNum !== "";
  let PasswordIsValid = Password.length >= 5;

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(MobileNum, Password);
    setMobileNum("");
    setPassword("");
    setFormValid(false);
    setNumTouched(false);
    setPassTouched(false);
  };
  const NumBlurHandler = () => {
    setNumTouched(true);
    console.log("blurred");
  };
  const PassBlurHandler = () => {
    setPassTouched(true);
    console.log("blurred");
  };

  useEffect(() => {
    if (MobileIsValid && PasswordIsValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [MobileNum, Password, NumTouched, PassTouched]);

  const NumChangeHandler = (event) => {
    let val = event.target.value;
    if (Number(val) || val === "") setMobileNum(event.target.value);
  };
  return (
    <div className="new-login">
      <form onSubmit={submitHandler}>


        <div className="new-login__controls">
          <span>
            <div className="new-login__control">
              <label>Mobile Number: </label>
              <input
                type="text"
                value={MobileNum}
                onBlur={NumBlurHandler}
                onChange={NumChangeHandler}
              ></input>
              </div>
              {!MobileIsValid && NumTouched && <p>enter valid mobile</p>}
            </span>
            <br></br>
          <span>
            <div className="new-login__control">
              <label>Password: </label>
              <input
                type="text"
                onBlur={PassBlurHandler}
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
              {!PasswordIsValid && PassTouched && (
                <p>Password length more than 5 chars</p>
              )}
            </div>
          </span>
          <div className="App">
            <div className="new-login__actions">
              <button disabled={!FormValid} type="submit">
                Login
              </button>
            </div>
          </div>

        </div>
      </form>

    </div>


  );
}

export default Login;