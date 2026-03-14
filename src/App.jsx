import React, { useEffect } from "react";
import RoutesApp from "./Routes/RoutesApp"; // Ensure path is correct
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fonts.css';
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <RoutesApp />;
}

export default App;
