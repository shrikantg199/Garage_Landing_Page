"use client";
import { useEffect, useState } from "react";
import Home from "@/components/Home";
import Loader from "@/components/Loader";


export default function HomePage() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="ds">
        {isLoading ? (
          <Loader />
        ) : (
          <>
           
            <Home />
          </>
        )}
      </div>
    </>
  );
}
