import '../styles/endnav.css';
export default function endnav(){
    return(<>
    <div className="endnavbar">
        <div className='head'>
            <h1>WeatherCast</h1>
        </div>
        <nav className="end-center">
            <ul>
                <li className="p-p">Privacy Policy</li>
                <li className="t-s">Terms of services</li>
                <li className="h-c">Help Center</li>
            </ul>
        </nav>
        <nav >
            <ul className="end-corner">
                <li className="end-brand">@2026 WeatherCast.All rights reserved.</li>
            </ul>
        </nav>
    </div>
    </>)
}