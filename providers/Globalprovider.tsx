import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";

const StateProvider = createContext<any>(null)

function Globalprovider({children}: any) {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    const [currentWidth, setCurrentWidth] = useState(
        typeof window !== "undefined" && window.innerWidth
      );

    useEffect(() => {
        if (typeof window !== "undefined" && currentWidth >= 1024) {
          console.log({ currentWidth });
          setIsDesktop(true);
          console.log("you're on a desktop");
        } else {
          console.log("hey you're on a mobile");
          setIsDesktop(false);
        }
      }, [currentWidth, isDesktop]);

  return (
    <StateProvider.Provider value={{}}>
        {children}
    </StateProvider.Provider>
  )
}

export {Globalprovider, StateProvider}