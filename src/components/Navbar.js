import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()

    return(
        <nav>
            <button className="nav-button" onClick={() => navigate('/contact')}>CONTACT</button>
            <button className="nav-button" onClick={() => navigate('/about')}>ABOUT US</button>
            <button className="nav-button" onClick={() => navigate('/')}>HOME</button>
            <button className="nav-button" onClick={() => navigate('/login')}>LOG IN</button>
            <button className="nav-button" onClick={() => navigate('/signup')}>SIGN UP</button>
        </nav>
    )
}
export default Navbar