import Navbar from "./navbar";
import img from "../assets/hill.jpg";
import "../styles/home.css";
import Endnav from "./footer";
import Searchcity from "./searchCity";
import { Navigate, useNavigate } from "react-router-dom";
import {Search,CloudSun,MonitorSmartphone} from 'lucide-react'

export default function Home() {
  const grid = [
    {
      icon: <CloudSun color="blue"size={30}/>,
      heading: "Live Weather Updates",
      content:
        "Real-time data at your fingertips, ensuring you're never caught off guard by changing conditions.",
    },
    {
      icon:<Search color="blue" size={30}/>,
      heading: "Fast City Search",
      content:
        "Find any location instantly with our high-speed global database of thousands of cities.",
    },
    {
      icon:<MonitorSmartphone color="blue" size={30}/> ,
      heading: "Responsiv Design",
      content:
        "Works perfectly on mobile, tablet and desktop, giving you weather clarity on any screen.",
    },
  ];
  const Navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="main" id="home">
        <div className="image1">
          <img src={img} alt="image" />
        </div>
        <div className="on-img-content">
          <div className="content">
            <h1 className="heading">Simple Weather Tracking For Everyone</h1>
            <p className="sub-heading">
              Get real-time weather updates for any city in the world with our
              clean and easy use interface
            </p>
          </div>
          <div className="main-btn">
            <button
              className="search-btn"
              onClick={() => Navigate("/Searchcity")}
            >
              Search Your City
            </button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
      <div className="features" id="Feature">
        <h1 className="featureh1">Everything you need to stay updated</h1>
        <div className="line"></div>
        <div className="grid">
          {grid.map((items, index) => (
            <div key={index} className="grid-items">
              <div className="grid-icon">{items.icon}</div>
              <h1>{items.heading}</h1>
              <p>{items.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="box" id="Contact">
        <div className="contact-left">
          <h2>Get in touch</h2>
          <p>
            Have a question or feedback? Send us an email and we'll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="contact-right">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Feedback"></textarea>
          <button>Send Message</button>
        </div>
      </div>

      <Endnav />
    </>
  );
}
