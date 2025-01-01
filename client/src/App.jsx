import { inject } from '@vercel/analytics';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Login} from './pages/Login';
import {Signup} from './pages/Signup';
import {Navbar} from './components/Navbar';

inject();

const App = () => {
  return <>
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;