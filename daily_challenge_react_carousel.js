// Instructions : Build A React Carousel

// 1. You will use the React Responsive Carousel Package to create the carousel.

// 2. In your App component make sure to use the corresponding imports of the installed package

// 3. Click on the links below, to retrieve the images for your carousel:
// Hong Kong, Macao, Japan, Las Vegas

// In this file:

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./daily_challenge_react_carousel.css";
import { Carousel } from "react-responsive-carousel";

export function DemoCarousel() {
  return (
    <div className="container">
      <Carousel>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

// In ./daily_challenge_react_carousel.css

// .container {
//   display: grid;
//   place-items: center;
//   min-height: 100vh;
// }

// .carousel-root {
//   max-width: 50%;
// }

// In app.js:

// import React from "react";
// import { DemoCarousel } from "./daily_challenge_react_carousel";

// function App() {
//   return (
//     <div>
//       <DemoCarousel />
//     </div>
//   );
// }

// export default App;

// in index.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();
