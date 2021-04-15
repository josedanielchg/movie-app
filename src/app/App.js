import { Loader } from "./components/Loader.js"
import { Router } from "./components/Router.js";
// import { Header } from "./components/Header.js"
import { Nav } from "./components/Nav.js"
import { Main } from "./components/Main.js"
import { Footer } from "./components/Footer.js"

export function App() {
     const $root = document.getElementById("root");

     $root.innerHTML = null;

     $root.appendChild(Loader());
     $root.appendChild(Nav())
     $root.appendChild(Main());
     $root.appendChild(Footer());
     Router();

     
}