import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/navbar';
import Wallet from './pages/wallet';
import Premium from './pages/Premium';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Group from './pages/Group';
import Schedule from './pages/Schedule';

function App() {
  return (
   <BrowserRouter >
   <div className='flex flex-row '>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/group' element={<Group />} />
        <Route path='/schedule' element={<Schedule />} />

      </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
