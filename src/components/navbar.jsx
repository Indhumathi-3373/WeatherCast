import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [signup, setSignup] = useState(false);
 const navigate = useNavigate();
  const gotohome=()=>{
    navigate('/')
    setTimeout(()=>{
       document.getElementById("home")?.scrollIntoView({
                    behavior: "smooth",
                  });
    },100)
  }
  const gotofeature = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("Feature")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };
  const gotocontact=()=>{
    navigate('/');
    setTimeout(()=>{
        document.getElementById("Contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
    },100)
  }

  return (
    <>
      <header className="navbar">
        <div className="brand">
          <h1>WeatherCast</h1>
        </div>
        <nav className="center">
          <ul className="ul">
            <li className="li">
              <Link to="/" onClick={gotohome}>  Home  </Link>
            </li>
            <li className="li">
              <Link  to="/"
                onClick={gotofeature}> Features </Link>
            </li>
            <li className="li">
              <Link  to="/"  onClick={gotocontact} >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="corner">
          <ul className="ull">
            <li className="signup">
              <Link to='/SignUp'>
                SignUp
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
