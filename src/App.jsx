import { Outlet } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent/HeaderComponent.jsx'
import FooterComponent from './components/FooterComponent/FooterComponent.jsx'
import './App.css'

function App() {

  return (
    <>
     <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  )
}

export default App
