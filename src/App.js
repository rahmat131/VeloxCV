import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Contact  from './Components/Contact';
// import Contact  from './Components/Contact2';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router>
      <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/get-your-cv" element={<Form />} />
            </Routes>
        {/* <Footer/> */}
        </Router>
    </div>
  );
}

export default App;