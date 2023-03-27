import Home from "./pages/Home"
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {

  const authToken = true;
  return (
    <BrowserRouter>
      <Routes>
      { authToken ? 
      (<Route path="/profile" element={<Profile/>}/>) 
      : 
      (<Route path="/" element={<Home/>}/>) }
        <Route path="/login" element={<Home content="login"/>}/>
        <Route path="/signup" element={<Home content="signup"/>}/>
        <Route path="/about" element={<Home content="about"/>}/>
        <Route path="/contact" element={<Home content="contact"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
