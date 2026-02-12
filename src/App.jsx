
import AboutUs from "./pages/AboutUs";
import ElementSection from "./components/ElementSection";
import Header from "./components/Header";
import LandPage from "./pages/LandPage";
import Menu from "./pages/Menu";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";

function HomePage(){
  return(
    <div>
      <Header />
      <Profile />
      <LandPage />
      <Menu />
      <AboutUs />
    </div>
  )
}

function App(){

  return(
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )

}

export default App;