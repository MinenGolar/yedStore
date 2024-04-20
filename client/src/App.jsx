import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/Home';
import Product from './pages/Product/Product';
import Navbar from './Navbar/Navbar'; 
import ProductPage from './pages/Product/ProductPage';
import Footer from './Footer/Footer';



function App() {

  return (
<>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/product" element={<Product />} />
    <Route path="/productpage" element={<ProductPage />} />
    <Route path="/footer" element={<Footer />} />

  </Routes>
</BrowserRouter>
</>
)
}

export default App
