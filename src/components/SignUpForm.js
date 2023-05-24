import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const CreateArrayOfBirth = () => {
  const currentYear = new Date().getFullYear();
  const birthYearEldest = currentYear - 100;
  const birthYearYoungest = currentYear - 18;
  const birthYears = [];

  for (let i = birthYearEldest; i <= birthYearYoungest; i++) {
    birthYears.push(i);
  }

  return (
    <>
      {birthYears.map((el) => (
        <option key={el}>{el} </option>
      ))}
    </>
  );
};

const SignUpForm = () => {
  const [stepTwo, setStepTwo] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [birthDate, setBirthDate] = useState(null);
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const navigate = useNavigate();

  const stepOneCheck = (e) => {
    e.preventDefault();
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    if (!password.match(upperCaseLetters)) {
      setError("Password must contain a capital letter");
    } else if (!password.match(numbers)) {
      setError("Password must contain a number");
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    } else if (password !== confirmPassword) {
      setError("Passwords need to match!");
    } else {
      setStepTwo(true);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
        birthDate,
        name,
        location,
      });

      setCookie("AuthToken", response.data.token, { path: "/" });
      setCookie("UserId", response.data.userId, { path: "/" });
      setCookie("Email", response.data.email, { path: "/" });
      setCookie("UserName", response.data.userName, { path: "/" });

      const success = response.status === 201;
      if (success) navigate("/profile");

      window.location.reload();
    } catch (error) {
      setError("User already exist");
    }
  };

  return (
    <div className="bg_rectangle formBackground">
      <span id="formTitleBold">Leave your headphones,</span>
      you are not going alone today
      <div className="progressBar">
        <div className="step">
          <div className="stepProgressBar currentStep">1</div>
          <span>ACCOUNT SETUP</span>
        </div>
        <div className="lineBetweenSteps"></div>
        <div className="step">
          <div className="stepProgressBar nextStep">2</div>
          <span>PERSONAL DETAILS</span>
        </div>
      </div>
      <div className="formSignUpLogIn">
        {stepTwo ? (
          <div>
            <p>PERSONALIZE YOUR ACCOUNT</p>
            <span className="belowTitle_form">This is step 2</span>

            <form>
              <div className="inputStepTwo">
                <span>Birth date: </span>
                <div className="selectCustomArrowLeft">
                  <FaCaretUp className="arrowFa" />
                  <select
                    required={true}
                    onChange={(e) => setBirthDate(e.target.value)}
                  >
                    {CreateArrayOfBirth()}
                  </select>
                </div>
              </div>
              <div className="inputStepTwo">
                <span>Name: </span>
                <input
                  type="text"
                  placeholder="Mati"
                  required={true}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inputStepTwo">
                <span>Location: </span>
                <input
                  type="text"
                  placeholder="Poznan"
                  required={true}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <label id="signUpError" className="formSignUpLogIn_label">
                {error}
              </label>

              <button className="submitButton" onClick={handleSubmitRegister}>
                GO FOR A RIDE!
              </button>
            </form>
          </div>
        ) : (
          <div>
            <p>CREATE YOUR ACCOUNT</p>
            <span className="belowTitle_form">This is step 1</span>

            <form>
              <input
                type="text"
                placeholder="Email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm password"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label
                className="formSignUpLogIn_label"
                onClick={() => navigate("/login")}
              >
                Already have account? Log in here
              </label>
              <label id="signUpError" className="formSignUpLogIn_label">
                {error}
              </label>

              <button
                className="submitButton"
                type="submit"
                onClick={stepOneCheck}
              >
                NEXT
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default SignUpForm;
