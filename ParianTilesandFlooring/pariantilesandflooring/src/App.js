import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Footers from "./components/Footer";

function App() {
  

  return (
    <BrowserRouter>
      <div id="page-body">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            {/* <Route path="/contact" element={<Contact/>}/> */}
            <Route path="/services" element={<Services/>}/> 
            <Route path="*" element={<NotFoundPage/>}/>   
          </Routes>
    </div>
    <Footers/>
    </BrowserRouter>
    
  );
}

export default App;
