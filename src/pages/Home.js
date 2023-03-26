import Navbar from "../components/Navbar"
import NotLoggedContent from "../components/NotLoggedContent"
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = (props) => {
    const content = props.content

    return(
        <>
        <Navbar/>
        <div className="overlay">
            <div id="title_home">
                <span id="who_title">WHO</span><span id="rides_title">rides</span>
            </div>
            {
                (() => {
                    if (content === "login") {
                        return(<LogInForm/>)
                    }
                    else if (content === "signup") {
                        return(<SignUpForm/>)
                        }
                    else if (content === "about") {
                        return(<About/>)
                        }
                    else if (content === "contact") {
                        return(<Contact/>)
                        } 
                    else {
                        return(<NotLoggedContent/>)
                        }
                })()  
            } 
        </div>
        </>
    )
}
export default Home