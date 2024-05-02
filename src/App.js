import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Index from './Pages/main/Index';
import Prayer from './Pages/prayer/Prayer';
import About from './Pages/About/About';
import Contact from './Pages/contact/Contact';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
