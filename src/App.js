import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

import Loader from "./components/Loader/Loader";
import { useState } from "react";
import Team from "./pages/Team";

function ScollVh() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const scollButton = document.querySelector("#scoll-vh");
  if (window.scrollY > 95) {
    scollButton.classList.add("scrolled");
  } else {
    scollButton.classList.remove("scrolled");
  }
});

function App() {
  const [load, setload] = useState(true);
  window.addEventListener("load", () => {
    setload(!load);
  });

  if (load) {
    document.querySelector("body").classList.add("hidden");
  } else {
    document.querySelector("body").classList.remove("hidden");
  }

  return (
    <div className="app">
      <Router>
        <Header />
        <Loader load={load} />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/about-us" component={AboutUs} />

          <Route exact path="/contacts" component={Contact} />

          <Route exact path="/team" component={Team} />

          <Route exact path="/services" component={Services} />
        </Switch>

        <button className="scroll-icon" id="scoll-vh" onClick={ScollVh}>
          <svg
            id="Solid"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              d="m232 383.431v-335.431a24 24 0 0 1 48 0v335.431l-24 24zm40.971 97.54 144-144a24 24 0 0 0 -33.942-33.942l-127.029 127.03-127.029-127.03a24 24 0 0 0 -33.942 33.942l144 144a24 24 0 0 0 33.942 0z"
            />
          </svg>
        </button>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
