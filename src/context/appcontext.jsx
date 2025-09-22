"use client"

import { createContext, useEffect, useState } from "react";



export const AppContext = createContext()

const AppContextProvider =(props)=>{
  const [navbar,setNavBar] = useState("")
  const getNavbar =async()=>{ 
    try {
      const path = process.env.NEXT_PUBLIC_API_URL
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navbar`)
      const data = await response.json()
      setNavBar(data)
    } catch (error) {
      console.log(error,"error")
    }
  }
  useEffect(()=>{
    getNavbar()
  },[])



  const value ={
    navbar
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider