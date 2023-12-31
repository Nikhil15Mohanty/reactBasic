import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ReactProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {path: "",
//       element: <Home/>
//     },
//       {path: "about",
//        element: <About/>
//       }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<Layout/>}>
      <Route path="" element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
    </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ReactProvider router = {router}/>
  </React.StrictMode>,
)
