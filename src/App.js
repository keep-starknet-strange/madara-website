import GlobalStyles from "./styles/GlobalStyles";
import { madara } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import News from "./components/sections/News";
import Footer from "./components/Footer";
import Features from "./components/sections/Features";
import Faq from "./components/sections/Faq";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={madara}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Features />
        <News />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default App;
