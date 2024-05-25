import { BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import AddStudent from "./pages/AddStudent"
import Profile from "./pages/Profile"
import StudentDetail from "./pages/StudentDetail"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/student" element={<StudentDetail/>}/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      
      </BrowserRouter>
  
    </>
  )
}

export default App
