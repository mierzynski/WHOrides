import Navbar from "../components/Navbar"

const Profile = () => {

    return(
        <>
        <Navbar isLogged={true}/>
        <div className="overlay">
            <div id="title_profile">
                <span id="who_profile">WHO</span><span id="rides_profile">rides</span>
            </div>
        </div>
        </>
    )
}
export default Profile