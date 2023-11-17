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
    <div id="page" tabIndex="3">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
