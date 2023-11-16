import Navbar from "./components/Navbar.jsx";
import "./styles/App.css";

import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Forum from "./pages/Forum.jsx";

function App() {
  let component;

  switch (window.location.pathname) {
      case "/":
          component = <Home />;
          break;

      case "/gallery":
          component = <Gallery />;
          break;

      case "/forum":
          component = <Forum />;
          break;
  }
  
  return (
    <>
      <Navbar />
      <div id="mainContent">
        {component}
      </div>
    </>
  );
}

export default App;
