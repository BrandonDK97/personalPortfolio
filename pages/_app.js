import { useEffect, useState } from "react";
import State from "../src/context/context";
import PreLoader from "../src/layouts/PreLoader";
import SliimHead from "../src/layouts/SliimHead";
import "../styles/globals.css";
import "../node_modules/swiper/swiper.min.css"


function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 1000);
  }, []);

  return (
    <State>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <SliimHead />
      <PreLoader />
      {!loaded && <Component {...pageProps} />}
    </State>
  );
}

export default MyApp;
