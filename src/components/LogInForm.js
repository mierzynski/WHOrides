import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const LogInForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      setCookie("AuthToken", response.data.token, { path: "/" });
      setCookie("UserId", response.data.userId, { path: "/" });
      setCookie("UserName", response.data.userName, { path: "/" });

      const success = response.status === 201;
      if (success) navigate("/profile");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg_rectangle formBackground">
      <span id="formTitleBold">Leave your headphones,</span>
      you are not going alone today
      <div className="progressBar">
        <div className="step">
          <div className="stepProgressBar currentStep">1</div>
          <span>LOG IN</span>
        </div>
        <div className="lineBetweenSteps"></div>
        <div className="step">
          <div className="stepProgressBar nextStep">2</div>
          <span>HAVE FUN</span>
        </div>
      </div>
      <div className="formSignUpLogIn">
        <div>
          <p>Lovely to see you again</p>
          <span className="belowTitle_form" id="belowTitle_login">
            This is step 1
          </span>

          <form>
            <input
              type="text"
              placeholder="Email"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Password"
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="formSignUpLogIn_label"
              onClick={() => navigate("/signup")}
            >
              Don't have account? Sign up here
            </label>

            <button
              className="submitButton"
              type="submit"
              onClick={handleSubmitLogin}
            >
              GO FOR A RIDE!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogInForm;
