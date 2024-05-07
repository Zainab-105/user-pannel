import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Index from './Pages/main/Index';
import Prayer from './Pages/prayer/Prayer';
import About from './Pages/About/About';
import Contact from './Pages/contact/Contact';
import Hadiths from './Pages/hadiths/Hadiths';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/About" element={<About />} />
          <Route path="/feedback" element={<Contact />} />
          <Route path="/hadiths" element={<Hadiths />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
