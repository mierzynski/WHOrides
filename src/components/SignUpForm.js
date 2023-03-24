

const SignUpForm = () => {
    return(
        <div className="bg_rectangle formBackground">
            <span id="formTitleBold">Leave your headphones,</span>
            you are not going alone today
            <div className="progressBar">
                <div className="stepProgressBar currentStep">1</div>
                <div className="lineBetweenSteps"></div>
                <div className="stepProgressBar nextStep">2</div>
            </div>
            <div className="stepNames">
                <div>ACCOUNT SETUP</div>
                <div>PERSONAL DETAILS</div>
            </div>

        </div>
    )
}
export default SignUpForm