import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Params from './components/Params'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to={'/home'} className='links'>Home</Link>
      <br/>
      <Link to={'/about'} className='links'>About</Link>
      <br/>
      <Link to={'/params'} className='links'>Params</Link>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/:word' element={<Params/>}/>
          <Route path='/:word/:fontColor/:bkgColor' element={<Params/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
