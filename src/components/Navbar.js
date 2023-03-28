import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const isLogged = props.isLogged
    const navigate = useNavigate()

    return(
        <>
        { isLogged ?
            (
                <nav>
                <button className="nav-button" onClick={() => navigate('/contact')}>CHAT</button>
                <button className="nav-button" onClick={() => navigate('/search')}>FIND_FRIENDS</button>
                <button className="nav-button" onClick={() => navigate('/profile')}>PROFILE</button>
                <button className="nav-button" onClick={() => navigate('/events')}>EVENTS</button>
                <button className="nav-button" onClick={() => navigate('/')}>LOG OUT</button>
            </nav>
            )
            :
            (
                <nav>
                <button className="nav-button" onClick={() => navigate('/contact')}>CONTACT</button>
                <button className="nav-button" onClick={() => navigate('/about')}>ABOUT US</button>
                <button className="nav-button" onClick={() => navigate('/')}>HOME</button>
                <button className="nav-button" onClick={() => navigate('/login')}>LOG IN</button>
                <button className="nav-button" onClick={() => navigate('/signup')}>SIGN UP</button>
            </nav>
            )

        }
        </>

    )
}
export default Navbar