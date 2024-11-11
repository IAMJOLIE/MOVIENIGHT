

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './component/Home'

import Search from './component/Search'
import NavComponent from './component/NavComponent'
import MyList from './component/MyList'
import Watched from './component/Warched'
import { MovieProvider } from './component/ConText/MovieContext'

import NotFound from './component/NotFound'





function App() {
  

  return (
    
    <MovieProvider>

    

    <NavComponent/>
    <Routes>
    
    <Route path="/" element={<Home />} />
    
   <Route path='/search' element= {<Search/>}/>
    <Route path="/mylist" element={<MyList />} />
    <Route path="/watched" element={<Watched />} />
    <Route path='*' element={<NotFound/>}/>
  </Routes>

</MovieProvider>

  )
}

export default App
