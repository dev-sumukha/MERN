import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'

function App() {
  return (
    <>

      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>

    </>
  );
}

export default App;
