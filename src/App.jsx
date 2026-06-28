import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/home.jsx'
import Searchcity from './components/searchCity.jsx'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<> <Home/></>    } />
        
        <Route path='/Searchcity' element={<><Searchcity/></>}/>
    </Routes>
     
    </>
  )
}

export default App
