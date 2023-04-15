import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const authToken = cookies.AuthToken;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home content="login" />} />
        <Route path="/signup" element={<Home content="signup" />} />
        <Route path="/about" element={<Home content="about" />} />
        <Route path="/contact" element={<Home content="contact" />} />

        {authToken && (
          <Route path="/profile" element={<Home content="profile" />} />
        )}
        {authToken && (
          <Route
            path="/find_friends"
            element={<Home content="find_friends" />}
          />
        )}
        {authToken && <Route path="/chat" element={<Home content="chat" />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
