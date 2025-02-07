import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Product"
import Contact from "./Pages/Contact"


function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/products" element={<Products />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
}
export default App
