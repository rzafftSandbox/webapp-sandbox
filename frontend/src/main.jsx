// The 'StrictMode' function runs extra checks and enables warning in the console if you are doing something that may cause bugs
import { StrictMode } from 'react'

// 'react-dom' bridges React (JS logic) and the browser's real HTML DOM (Document Object Model - the browser's internal representation of a web page - a structred 'tree of objects').
// 'createRoot' is the entry point — it mounts React onto a real DOM node (e.g. a single element of the DOM tree like <div>, <p>, etc.). 
import { createRoot } from 'react-dom/client'

// Importing global CSS styles that apply to the entire app
import './index.css'

// The root component. Everything your app renders lives in or is called from here.
import App from './App.jsx'


// 1. document.getElementById('root') — grabs the <div id="root"> from index.html
// 2. createRoot(...)                 — hands that div to React to manage
// 3. .render(...)                    — renders <App /> into that div, kicking off the whole app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
