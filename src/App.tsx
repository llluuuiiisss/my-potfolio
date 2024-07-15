import React, { useState, useEffect, useRef } from "react";
import "./custom.scss";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import TechStack from "./Components/TechStack/TechStack";
import Education from "./Components/Education/Education";
import Portfolio from "./Components/Potfolio/Portfolio";
import ContactMe from "./Components/ContactMe";

interface UIEvent<T = Element, E = React.UIEvent>
  extends React.SyntheticEvent<T, E> {
  detail: number;
  view: React.AbstractView;
}

function App() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [darkNav, setDarkNav] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // console.log(bodyRef.current?.getBoundingClientRect());

    if (bodyRef.current?.getBoundingClientRect().top! < 65) {
      setDarkNav(true);
    } else {
      setDarkNav(false);
      if (prevScrollPosition < scrollPosition) {
      }
    }
    setPrevScrollPosition(scrollPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);
  return (
    <div className="App">
      <Header darkNav={darkNav}></Header>
      <Banner></Banner>
      <div className={`dark-section `} ref={bodyRef}>
        <TechStack></TechStack>
        <Education></Education>
        <Portfolio></Portfolio>
        <ContactMe></ContactMe>
      </div>
    </div>
  );
}

export default App;
