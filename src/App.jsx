import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/home.jsx'
import SignUp from './components/signup.jsx'
import Searchcity from './components/searchCity.jsx'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<> <Home/></>    } />
        <Route path='/SignUp' element={<> <SignUp/></> }/>
        <Route path='/Searchcity' element={<><Searchcity/></>}/>
    </Routes>
     
    </>
  )
}

export default App
