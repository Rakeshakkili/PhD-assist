import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from "./components/Register";
import About from './pages/About';
import ServicesPage from "./pages/ServicesPage";
import ResearchResources from './pages/ResearchResources';
import ContactUs from "./pages/Contact";
import Blog from "./pages/Blog";
import FAQ from "./components/FAQ";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/research-resources" element={<ResearchResources />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<FAQ />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
