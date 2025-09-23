"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  // ⬇️ navbar ko string ke bajaye array/object me rakho
  const [navbar, setNavBar] = useState([]);

  const getNavbar = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navbar`);
      if (!response.ok) throw new Error("Failed to fetch navbar");
      const data = await response.json();

      // ⬇️ Backend se array aata hai, isliye usko set karo
      setNavBar(data);
    } catch (error) {
      console.log("Error fetching navbar:", error);
    }
  };

  useEffect(() => {
    getNavbar();
  }, []);

  const value = {
    navbar,
    getNavbar, // ⬅️ ye add kar diya taake reload kar sako
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
