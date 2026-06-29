WeatherCast

WeatherCast is a full-stack weather application that provides real-time weather information for any city using a weather API. It offers a clean and responsive user interface while integrating a backend service for handling user feedback via email.

Features
🌍 Search weather by city name
🌡️ Display current temperature
💧 Show humidity
🌬️ Show wind speed
☁️ Display weather condition and icon
📱 Responsive React-based user interface
📧 Feedback form that sends emails through the backend using the Resend API
☁️ Backend deployed on Render
Tech Stack

Frontend

React
JavaScript
CSS
Axios

Backend

Node.js
Express.js
CORS
dotenv

API & INTEGRATION :

openWeather API
resend API
REST API

Deployment:
Frontend: (e.g., Netlify or Vercel, depending on where you host it)
Backend: Render

How it works
The user enters a city name.
The React frontend sends a request to the weather API.
Weather data is displayed instantly.
Users can submit feedback through a form.
The backend receives the feedback and uses the Resend API to send it as an email to the project owner.
What I learned from this project
Building REST APIs with Express.js
Connecting React with a Node.js backend
Handling asynchronous API requests using Axios
Managing environment variables securely with dotenv
Deploying frontend and backend applications
Sending emails using the Resend API
Debugging deployment issues, including network restrictions and replacing SMTP-based email delivery with an API-based solution
