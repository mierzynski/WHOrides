// import { useState } from "react";
// import { FaCaretUp } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const CreateArrayOfBirth = () => {
//     const currentYear = new Date().getFullYear()
//     const birthYearEldest = currentYear - 100
//     const birthYearYoungest = currentYear - 18
//     const birthYears = []
    
//     for(let i = birthYearEldest; i <= birthYearYoungest; i++){
//         birthYears.push(i)
//     }

//     return (
//         <>
//             {
//               birthYears.map(el => <option key={el} >{el} </option>)
//             }
//         </>
//      )
// }


// const SignUpForm = async () => {
//     const [stepTwo, setStepTwo] = useState(false)
//     const [email, setEmail] = useState(null)
//     const [password, setPassword] = useState(null)
//     const [confirmPassword, setConfirmPassword] = useState(null)
//     const [error, setError] = useState(null)


//     const navigate = useNavigate()

//     // const handleSubmitRegister = async () => {
//     //     try {
//     //         const response = await axios.post('http://localhost:8000/signup', {email, password})

//     //         const success = response.status == 201

//     //         if (success) navigate('/profile')

//     //     } catch (error) {
//     //         console.log(error)
//     // }
    
//     // const handleSubmitStepOne = (e) => {
//     //     e.preventDefault()
//     // }

//     return(
//         <div className="bg_rectangle formBackground">
//             <span id="formTitleBold">Leave your headphones,</span>
//             you are not going alone today
//             <div className="progressBar">
//                 <div className="step">
//                     <div className="stepProgressBar currentStep">1</div>
//                     <span>ACCOUNT SETUP</span>
//                 </div>
//                 <div className="lineBetweenSteps"></div>
//                 <div className="step">
//                     <div className="stepProgressBar nextStep">2</div>
//                     <span>PERSONAL DETAILS</span>
//                 </div>
//             </div>

//             <div className="formSignUpLogIn">
//                 {stepTwo ? 
//                 (<div>
//                 <p>PERSONALIZE YOUR ACCOUNT</p>
//                 <span className="belowTitle_form">This is step 2</span>

//                 <form>
//                     <div className="inputStepTwo">
//                         <span>Birth date: </span>
//                         <div className="selectCustomArrowLeft"><FaCaretUp className="arrowFa" />
//                         <select>
//                             {CreateArrayOfBirth()}
//                         </select>
//                         </div>
//                     </div>
//                     <div className="inputStepTwo">
//                         <span>Name: </span>
//                         <input
//                         type="text" 
//                         defaultValue="Mati"
//                         />
//                     </div>
//                     <div className="inputStepTwo">
//                         <span>Location: </span>
//                         <input
//                         type="text" 
//                         defaultValue="Poznan"
//                         />
//                     </div>

//                         <button className="submitButton" >GO FOR A RIDE!</button>
//                  </form>
//                 </div>)
//                 :
//                 (<div>
//                 <p>CREATE YOUR ACCOUNT</p>
//                 <span className="belowTitle_form">This is step 1</span>

//                 <form>
//                         <input
//                         type="text" 
//                         // defaultValue="E-mail"
//                         // placeholder="Email"
//                         // required={true}
//                         // onChange={(e) => setEmail(e.target.value)}
//                         />

//                         <input
//                         type="text" 
//                         defaultValue="Password"
//                         // required={true}
//                         // onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <input
//                         type="text" 
//                         defaultValue="Confirm password"
//                         // required={true}
//                         // onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         <label onClick={() => navigate('/login')}>Already have account? Log in here</label>

//                         <button className="submitButton" type="submit" onClick={() => setStepTwo(true)}>NEXT</button>
//                  </form>
//                 </div>)
//                 }
//             </div>
//         </div>
//     )
// }
// export default SignUpForm


import { useState } from "react";
import { FaCaretUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    console.log(email, password)

    const handleSubmitRegister = async (e) => {

        e.preventDefault()

        try {
            // if (isSignUp && (password !== confirmPassword)) {
            //     setError('Passwords need to match!')
            //     return
            // }

            const response = await axios.post('http://localhost:8000/signup', {email, password})

            // setCookie('AuthToken', response.data.token)
            // setCookie('UserId', response.data.userId)

            const success = response.status === 201
            // if (success && isSignUp) navigate ('/onboarding')
            // if (success && !isSignUp) navigate ('/dashboard')

            window.location.reload()

        } catch (error) {
            console.log(error)
        }

    }

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
                        <input
                        type="text" 
                        placeholder="Confirm password"
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {/* <label onClick={() => navigate('/login')}>Already have account? Log in here</label> */}
                        <label id="signUpError">Password isn't the same</label>

                        <button className="submitButton" type="submit" onClick={() => setStepTwo(true)}>NEXT</button>
                 </form>
                </div>)
                }
            </div>
        </div>
    )
}
export default SignUpForm