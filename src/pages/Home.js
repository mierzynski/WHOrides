import Navbar from "../components/Navbar"
import NotLoggedContent from "../components/NotLoggedContent"
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";
import About from "../components/About";
import Contact from "../components/Contact";
import Profile from "../components/Profile";
import FindFriends from "../components/FindFriends";
import {useCookies} from 'react-cookie'

const Home = (props) => {
    const content = props.content

    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return(
        <>
        <Navbar isLogged={authToken}/>
        <div className="overlay">
            {authToken ?
            (<div id="title_logged">
            <span id="who_logged">WHO</span><span id="rides_logged">rides</span>
            </div>)
            :
            (<div id="title_home">
            <span id="who_title">WHO</span><span id="rides_title">rides</span>
            </div>)}
            
            
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
                    else if (content === "profile") {
                            return(<Profile/>)
                            }  
                    else if (content === "find_friends") {
                            return(<FindFriends/>)
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