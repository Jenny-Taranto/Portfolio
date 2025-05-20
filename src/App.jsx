import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './pages/About/About.jsx';
import Project from './pages/Project/Project.jsx';
import Error from './pages/Error/Error.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
