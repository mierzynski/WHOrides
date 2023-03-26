import { useState } from "react";
import { FaCaretUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const CreateArrayOfBirth = () => {
    const currentYear = new Date().getFullYear()
    const birthYearEldest = currentYear - 100
    const birthYearYoungest = currentYear - 18
    const birthYears = []
    
    for(let i = birthYearEldest; i <= birthYearYoungest; i++){
        birthYears.push(i)
    }

    return (
        <>
            {
              birthYears.map(el => <option key={el} >{el} </option>)
            }
        </>
     )
}


const SignUpForm = () => {
    const [stepTwo, setStepTwo] = useState(false)
    const navigate = useNavigate()

    return(
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
                {stepTwo ? 
                (<div>
                <p>PERSONALIZE YOUR ACCOUNT</p>
                <span className="belowTitle_form">This is step 2</span>

                <form>
                    <div className="inputStepTwo">
                        <span>Birth date: </span>
                        <div className="selectCustomArrowLeft"><FaCaretUp className="arrowFa" />
                        <select>
                            {CreateArrayOfBirth()}
                        </select>
                        </div>
                    </div>
                    <div className="inputStepTwo">
                        <span>Name: </span>
                        <input
                        type="text" 
                        defaultValue="Mati"
                        />
                    </div>
                    <div className="inputStepTwo">
                        <span>Location: </span>
                        <input
                        type="text" 
                        defaultValue="Poznan"
                        />
                    </div>

                        <button className="submitButton">GO FOR A RIDE!</button>
                 </form>
                </div>)
                :
                (<div>
                <p>CREATE YOUR ACCOUNT</p>
                <span className="belowTitle_form">This is step 1</span>

                <form>
                        <input
                        type="text" 
                        defaultValue="E-mail"
                        />

                        <input
                        type="text" 
                        defaultValue="Password"
                        />
                        <input
                        type="text" 
                        defaultValue="Confirm password"
                        />
                        <label onClick={() => navigate('/login')}>Already have account? Log in here</label>

                        <button className="submitButton" type="submit" onClick={() => setStepTwo(true)}>NEXT</button>
                 </form>
                </div>)
                }
            </div>
        </div>
    )
}
export default SignUpForm