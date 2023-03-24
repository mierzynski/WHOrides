import Navbar from "../components/Navbar"
import NotLoggedContent from "../components/NotLoggedContent"
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

const Home = () => {
    const [logSign_clicked, setLogSign_clicked] = useState(true);
    // console.log(formOrNot)
    return(
        <>
        <Navbar/>
        <div className="overlay">
            <div id="title_home">
                <span id="who_title">WHO</span><span id="rides_title">rides</span>
            </div>
            {logSign_clicked ? 
            ( <SignUpForm /> )
            :
            ( <NotLoggedContent /> )
            }

        </div>
        </>
    )
}
export default Home