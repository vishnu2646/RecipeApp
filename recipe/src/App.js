import { useState } from 'react';
import Detail from './Pages/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './styles/App.css';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import useLocalStorage from 'use-local-storage'


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const [visible, setVisible] = useState(false)

  const scrollTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible)

  return (
    <Router>
      <Navbar darkMode={switchTheme} theme={theme}/>
      <div className="App" data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <button className='btn btn-danger scroll-top' onClick={scrollTop} style={{display: visible ? 'block':'none'}}> 
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
      <Footer isFromLogin/>
    </Router>
  );
}

export default App;
