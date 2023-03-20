import './App.css';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import About from './About/About';
import Faq from './Faq/Faq';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Team from './Team/Team';
import Clients from './Clients/Clients';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} /> */}
        </Routes>
        <About />
        <Services />
        <Portfolio />
        <Faq />
        <Team />
        <Clients />
        <div className='footer'></div>
      </header>
    </div>
  );
}

export default App;
