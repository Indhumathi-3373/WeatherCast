import Navbar from './navbar'

export default function SearchCity() {
  const weather={
    city:'chennai',
    temperature:'30 c',
    weathercondition:'',
   
  }
  const fiveday=[{
    day1:'Monday',
    day1:'Tuesday',
    day1:'Wednesday',
    day1:'Thursday',
    day5:'Friday'
  }]
  return <>
  <Navbar/>
  <div className='searchcity'>
  <div className='search-city-btn'>
    <input type='search' placeholder='Enter city' />
    <button >Search</button>
  </div>
  <h1>Current Weather</h1>
  </div>
  <div className="weather-showcase">
    <h1>{weather.city}</h1>
    <p>date</p>
    <div className="top-card">
      
    </div>
    <div className="weather-card">
      <div>icon</div>
      <div className=""></div>
    </div>
  </div>
  </>;
}
