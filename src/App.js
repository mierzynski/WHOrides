import Home from "./pages/Home"
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {

  const authToken = false;
  return (
    <BrowserRouter>
      <Routes>
      { authToken ? 
      (<Route path="/logged" element={<Home/>}/>) 
      : 
      (<Route path="/" element={<Home/>}/>) }
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
