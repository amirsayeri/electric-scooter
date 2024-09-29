import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Products from "./components/Pages/Products/Products";
import ProductDetail from "./components/Pages/ProductDetail/ProductDetail";
import Contact from "./components/Pages/Contact us/Contact";
import DetailTwo from "./components/Pages/DetailTwo/DetailTwo";
import Blog from "./components/Pages/Blog/Blog";
import BlogDetail from "./components/Pages/BlogDetail/BlogDetail";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/detailTwo/:id" element={<DetailTwo/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blogDetail/:id" element={<BlogDetail/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
