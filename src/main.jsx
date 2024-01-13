import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'; // Import necessary components

import App from './App.jsx';
import './index.css';
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About  from './components/About/About.jsx'
import Contact from './components/Contact us/Contact.jsx'
import User from './components/User/User.jsx';
import Github ,{githubInfoLoader} from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout /> ,
//     children : [
//       {
//         path : "",
//         element : < Home />
//       },
//       {
//         path : "About",
//         element : < About />
//       },
//       {
//         path : "Contact",
//         element : < Contact />
//       }
//     ]
//   }
// ])

//or 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/> } />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='Github' 
        element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
