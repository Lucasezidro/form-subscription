import { Outlet } from "react-router-dom"
import { GlobalStyle } from "./styles/globalStyle"

function App() {

  return (
    <>
     <GlobalStyle />
     <Outlet />
    </>
  )
}

export default App
