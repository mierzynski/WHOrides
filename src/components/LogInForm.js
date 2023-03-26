import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const navigate = useNavigate()

    return(
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
                <span className="belowTitle_form" id="belowTitle_login">This is step 1</span>

                <form>
                        <input
                        type="text" 
                        defaultValue="E-mail"
                        />

                        <input
                        type="text" 
                        defaultValue="Password"
                        />
                        <label onClick={() => navigate('/signup')}>Don't have account? Sign up here</label>

                        <button className="submitButton" type="submit">GO FOR A RIDE!</button>
                 </form>
                </div>
            </div>
        </div>
    )
}
export default LogInForm