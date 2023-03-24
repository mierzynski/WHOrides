import image_home from "../image_home.png"

const NotLoggedContent = () => {
    return(
        <div>
                <div id="sign_and_image">
                <div className="columns">
                    <p className="columnTxt">Leave your headphones,</p>
                    <p className="columnTxt" id="bottomTxt">you are not going alone today</p>
                    <button className="button_curved"><span>SIGN UP</span></button>
                </div>
                <div className="columns">
                    <img id="img_home" src={image_home} alt="cyclist_aesthetic"/>
                </div>
            </div>
            <div id="bottom_home">
                <div className="bg_rectangle">
                    <div id="bottom_title">What our app actually do?</div>
                    <div id="bottom_content">Our application will help you find a driving partner, which will have similar preferences to yours.
                        Unlike various group on social networks, dating apps, where were you looking for companionship to drive.
                        Here to goal is clear: <span>spin for kilometers</span></div>
                    <div id="bottom_buttons">
                        <button className="button_curved" id="botton_SIGNUP">SIGN UP</button>
                        <button className="button_curved" id="botton_DMUS">DM US</button>
                    </div>
                </div>

            </div>
            </div>
    )
}
export default NotLoggedContent