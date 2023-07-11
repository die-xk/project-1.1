import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "./App"
import About from "./routes/pages/about-us/About"
import Contact from "./routes/pages/contact-us/Contact"
import Products from "./routes/pages/products/Products"


export default function Routing (){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<App />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}