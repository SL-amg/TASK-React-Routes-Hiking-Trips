import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // learn it this is fixed
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import Nav from './components/Nav';

const router = createBrowserRouter([
  {
    path:"/",
    element: <>
        <Nav />
        <Home/> {/* to add nav bar to all pages add it in an empty brackets */}
    </>
  },
  {
    path:"/home",
    element: <>
    <Nav /> {/* to add nav bar to all pages add it in an empty brackets */}
    <Home />
    </>
  },
  {
    path:"/TripList",
    element:  <>
    <Nav /> {/* to add nav bar to all pages add it in an empty brackets */}
    <TripsList />
    </>
  },
  {
    path:"/TripDetail/:tripId", // this to add a route param
    element:  <>
    <Nav /> {/* to add nav bar to all pages add it in an empty brackets */}
    <TripDetail  />
    </>
  },
])

ReactDOM.render(
  <React.StrictMode>
<RouterProvider router={router} />   {/*  learn it it is fixed  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
