import Navbar from "../components/Navbar"
import image_home from "../image_home.png"

const Home = () => {
    return(
        <>
        <Navbar/>
        <div className="overlay">
            <div id="title_home">
                <span id="who_title">WHO</span><span id="rides_title">rides</span>
            </div>
            <div id="sign_and_image">
                <div className="columns">
                    <p className="columnTxt">Leave your headphones,</p>
                    <p className="columnTxt" id="bottomTxt">you are not going alone today</p>
                    <button className="button_curved"><span>SIGN UP</span></button>
                </div>
                <div className="columns">
                    <img src={image_home} />
                </div>
            </div>
            <div id="bottom_home">
                <div className="bg_rectangle"></div>
            </div>
        </div>
        </>
    )
}
export default Home