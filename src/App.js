import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import NewsFetch from './NewsFetch';
import Error from './Error';
const App = () => {

  return (
    
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/category'  element={<NewsFetch/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App