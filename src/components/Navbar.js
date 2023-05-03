import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const isLogged = props.isLogged;
  const navigate = useNavigate();

  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    removeCookie("UserName", cookies.UserName);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      {isLogged ? (
        <nav>
          <button className="nav-button" onClick={() => navigate("/chat")}>
            CHAT
          </button>
          <button
            className="nav-button"
            onClick={() => navigate("/find_friends")}
          >
            FIND_FRIENDS
          </button>
          <button className="nav-button" onClick={() => navigate("/profile")}>
            PROFILE
          </button>
          <button className="nav-button" onClick={() => navigate("/events")}>
            EVENTS
          </button>
          <button className="nav-button" onClick={logout}>
            LOG OUT
          </button>
        </nav>
      ) : (
        <nav>
          <button className="nav-button" onClick={() => navigate("/contact")}>
            CONTACT
          </button>
          <button className="nav-button" onClick={() => navigate("/about")}>
            ABOUT US
          </button>
          <button className="nav-button" onClick={() => navigate("/")}>
            HOME
          </button>
          <button className="nav-button" onClick={() => navigate("/login")}>
            LOG IN
          </button>
          <button className="nav-button" onClick={() => navigate("/signup")}>
            SIGN UP
          </button>
        </nav>
      )}
    </>
  );
};
export default Navbar;
