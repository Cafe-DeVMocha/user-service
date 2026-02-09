import ElementSection from "./components/ElementSection";
import Header from "./components/Header";
import LandPage from "./components/LandPage";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";

function HomePage(){
  return(
    <div>
      <Header />
      <Profile />
      <LandPage />
      <ElementSection />
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