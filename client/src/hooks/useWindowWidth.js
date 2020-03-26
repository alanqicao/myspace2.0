  
import { useState, useEffect, } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect( () => {
    console.log(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth);    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return width;
}