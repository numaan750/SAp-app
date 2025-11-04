"use client";

import { createContext, useEffect, useState } from "react";

export const appContext = createContext();

const appContextProvider = (props) => {
  const [navbar, setNavBar] = useState([]);
  const [hero, sethero] = useState([]);
  const [states, setstates] = useState([]);
  const [features, setfeatures] = useState([]);
  const [device, setdevice] = useState([]);
  const [comunication, setcomunication] = useState([]);
  const [sapwork, setsapwork] = useState([]);
  const [Interface, setinterface] = useState([]);
  const [reviews, setreviews] = useState([]);
  const [pricing, setpricing] = useState([]);
  const [team, setteam] = useState([]);
  const [available, setavailable] = useState([]);
  const [contectus, setContectus] = useState([]);
  const [footer, setfooter] = useState([]);
  const [loading, setLoading] = useState(true);

  //navbar k liya ya hy
  const getNavbar = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/navbar`);
      if (!response.ok) throw new Error("Failed to fetch navbar");
      const data = await response.json();

      setNavBar(data);
    } catch (error) {
      console.log("Error fetching navbar:", error);
    }
  };
  //hero k liya ya hy
  const gethero = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/hero`);
      if (!response.ok) throw new Error("Failed to fetch hero");
      const data = await response.json();
      console.log(data, "hero");

      sethero(data[0]);
    } catch (error) {
      console.log("Error fetching hero:", error);
    }
  };

  //  STATE k liya ya hy
  const getstates = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/state`);
      if (!response.ok) throw new Error("Failed to fetch states");
      const data = await response.json();
      console.log(data, "states");

      console.log(data, "state data");
      setstates(data[0]);
    } catch (error) {
      console.log("Error fetching states:", error);
    }
  };

  //features k liya
  const getfeatures = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/features`
      );
      if (!response.ok) throw new Error("Failed to fetch features");
      const data = await response.json();
      console.log(data, "features data");
      setfeatures(data[0]); // API likely returns an array
    } catch (error) {
      console.log("Error fetching features:", error);
    }
  };

  //device section k liya
  const getdevice = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/device`);
      if (!response.ok) throw new Error("Failed to fetch device");
      const data = await response.json();
      console.log(data, "device");

      console.log(data, "device data");
      setdevice(data[0]);
    } catch (error) {
      console.log("Error fetching device:", error);
    }
  };
  //comunication section k liya
  const getcomunication = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/comunication`
      );
      if (!response.ok) throw new Error("Failed to fetch comunication");
      const data = await response.json();
      console.log(data, "comunication");

      console.log(data, "comunication data");
      setcomunication(data[0]);
    } catch (error) {
      console.log("Error fetching comunication:", error);
    }
  };
  //sapwork section k liya
  const getsapwork = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/sapwork`
      );
      if (!response.ok) throw new Error("Failed to fetch sapwork");
      const data = await response.json();
      console.log(data, "sapwork");

      console.log(data, "sapwork data");
      setsapwork(data[0]);
    } catch (error) {
      console.log("Error fetching sapwork:", error);
    }
  };
  //interface section k liya
  const getinterface = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/interface`
      );
      if (!response.ok) throw new Error("Failed to fetch interface");
      const data = await response.json();
      console.log(data, "interface");

      console.log(data, "interface data");
      setinterface(data[0]);
    } catch (error) {
      console.log("Error fetching interface:", error);
    }
  };
  //reviews section k liya
  const getreviews = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews`
      );
      if (!response.ok) throw new Error("Failed to fetch reviews");
      const data = await response.json();
      console.log(data, "reviews");

      console.log(data, "reviews data");
      setreviews(data[0]);
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  //pricing section k liya
  const getpricing = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pricing`
      );
      if (!response.ok) throw new Error("Failed to fetch pricing");
      const data = await response.json();
      console.log(data, "pricing");

      console.log(data, "pricing data");
      setpricing(data[0]);
    } catch (error) {
      console.log("Error fetching pricing:", error);
    }
  };

  //team section k liya
  const getteam = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/team`);
      if (!response.ok) throw new Error("Failed to fetch team");
      const data = await response.json();
      console.log(data, "team");

      console.log(data, "team data");
      setteam(data[0]);
    } catch (error) {
      console.log("Error fetching team:", error);
    }
  };
  //available section k liya

  const getavailable = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/available`
      );
      if (!response.ok) throw new Error("Failed to fetch available");
      const data = await response.json();
      console.log(data, "available");

      console.log(data, "available data");
      setavailable(data[0]);
    } catch (error) {
      console.log("Error fetching available:", error);
    }
  };

  //contect us section k liya

  const getcontectus = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contectus`
      );
      if (!response.ok) throw new Error("Failed to fetch contectus");
      const data = await response.json();
      console.log(data, "contectus");

      console.log(data, "contectus data");
      setContectus(data[0]);
    } catch (error) {
      console.log("Error fetching contectus:", error);
    }
  };

  //footer section k liya

  const getfooter = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
      if (!response.ok) throw new Error("Failed to fetch footer");
      const data = await response.json();
      console.log(data, "footer");

      console.log(data, "footer data");
      setfooter(data[0]);
    } catch (error) {
      console.log("Error fetching footer:", error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await Promise.all([
          getNavbar(),
          gethero(),
          getstates(),
          getfeatures(),
          getdevice(),
          getcomunication(),
          getsapwork(),
          getinterface(),
          getreviews(),
          getpricing(),
          getteam(),
          getavailable(),
          getcontectus(),
          getfooter(),
        ]);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  //  //navbar k liya
  //   useEffect(() => {
  //     getNavbar();
  //   }, []);

  //   useEffect(() => {
  //     //herosection k liya
  //     gethero();
  //   }, []);

  //   useEffect(() => {
  //     //  states k liya
  //     getstates();
  //   }, []);
  // // features k liya

  //   useEffect(() => {
  //     getfeatures();
  //   }, []);

  //   useEffect(() => {
  //     // device k liya
  //     getdevice();
  //   }, []);

  //   useEffect(() => {
  //     // comunication k liya
  //     getcomunication();
  //   }, []);

  //   useEffect(() => {
  //     // sapwork k liya
  //     getsapwork();
  //   }, []);
  //  // interface k liya
  //   useEffect(() => {
  //     getinterface();
  //   }, []);

  //   useEffect(() => {
  //     // revews k liya
  //     getreviews();
  //   }, []);
  //   useEffect(() => {
  //     // pricing k liya
  //     getpricing();
  //   }, []);
  //   useEffect(() => {
  //     // team k liya
  //     getteam();
  //   }, []);
  //   useEffect(() => {
  //     // available k liya
  //     getavailable();
  //   }, []);

  //   useEffect(() => {
  //     // contect us k liya
  //     getcontectus();
  //   }, []);

  //   // footer k liya
  //   useEffect(() => {
  //     getfooter();
  //   }, []);

  const value = {
    navbar,
    hero,
    states,
    features,
    device,
    comunication,
    sapwork,
    Interface,
    reviews,
    pricing,
    team,
    available,
    contectus,
    footer,
    loading,
    getNavbar,
    gethero,
    getstates,
    getfeatures,
    getdevice,
    getcomunication,
    getsapwork,
    getinterface,
    getreviews,
    getpricing,
    getteam,
    getavailable,
    getcontectus,
    getfooter,
  };

  return (
    <appContext.Provider value={value}>{props.children}</appContext.Provider>
  );
};
export default appContextProvider;
