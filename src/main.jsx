import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Counter from "./components/Counter.jsx";
import Posts from "./components/Posts.jsx";
import App from "./App.jsx"; // app.jsx has some styling that I can't get rid of for now

const greeting = <h1>Hello React</h1>
// const greeting = React.createElement("h1", null, "Hello React") // alternative



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {greeting}
    {/* <App/> */}
    <Counter/>
    <Posts/>
  </React.StrictMode>,
)
