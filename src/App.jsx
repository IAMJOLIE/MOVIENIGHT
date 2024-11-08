

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'

import Search from './component/Search'
import NavComponent from './component/NavComponent'
import MyList from './component/MyList'
import Watched from './component/Warched'
import { MovieProvider } from './component/ConText/MovieContext'
import { Box } from '@mui/material'
import NotFound from './component/NotFound'






function App() {
  

  return (
    
    <MovieProvider>

    
   <Router>
    <NavComponent/>
    <Routes>
    
    <Route path="/" element={<Home />} />
    
   <Route path='/search' element= {<Search/>}/>
    <Route path="/mylist" element={<MyList />} />
    <Route path="/watched" element={<Watched />} />
    <Route path='*' element={<NotFound/>}/>
  </Routes>
</Router>
</MovieProvider>

  )
}

export default App
