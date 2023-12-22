import { Outlet } from "react-router-dom"
import Nav from "./Shared/Nav"
import Footer from "./Shared/Footer"

function App() {

  return (
    <>
     <Nav></Nav>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
