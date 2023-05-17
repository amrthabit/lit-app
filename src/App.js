import ThemeProvider from "@mui/private-theming/ThemeProvider";
import { useEffect, useState } from "react";

import Experience from "./comps/experience";
import Footer from "./comps/footer";
import MuiHeader from "./comps/header";
import MuiForm from "./comps/muiform";
import Projects from "./comps/projects";
import Skills from "./comps/skills";
import Title from "./comps/title";

import { dark, light } from "./comps/theme";

import "./App.css";

function App() {
  const [isLight, setIsLight] = useState(true);
  const [yOffset, setYOffset] = useState(0);

  const switchTheme = () => {
    setIsLight(!isLight);
  };

  let theme = isLight ? light : dark;

  const [atTop, setAtTop] = useState(true);
  const handleScroll = () => {
    setAtTop(window.pageYOffset === 0);
    setYOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={isLight ? "App" : "App dark"}>
        <MuiHeader isLight={isLight} switchTheme={switchTheme} atTop={atTop} />
        <Title atTop={atTop} yOffset={yOffset} />

        {/* <div style={{ height: "100vh" }} /> */}
        <Experience />
        <Projects />
        {/* <Skills /> */}
        <MuiForm />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
