import React from "react"
import Header from "../Header"
import MainF from "../MainF"

const Main = ({ theme, setTheme  })=>{
   return (
      <>
      <Header />
      <MainF theme={theme} setTheme={setTheme}/>
      </>
   )
}
export default Main 