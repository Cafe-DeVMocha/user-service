
import AboutUs from "./pages/AboutUs";
import ElementSection from "./components/ElementSection";
import Header from "./components/Header";
import LandPage from "./pages/LandPage";
import Menu from "./pages/Menu";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Login from "./pages/Login.jsx";

function HomePage() {
  return (
    <div>
      
      <Header />
      <Profile />
      <LandPage />
      <Menu />
      <AboutUs />
      <ContactUs />


    </div>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profileHome" element ={<ProfilePage/>} />
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </>
  )

}

export default App;