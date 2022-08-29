// import React from 'react'
// import './App.css'
// import Nav from './Nav'
// import About from './About'
// import Shop from './Shop'
// import Home from './Home'
// import Service from './Service'
// import Contact from './Contact'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'


// export default function App() {
//   return (
//     <BrowserRouter>
//     <div className='App'>
//       <Nav />
//       <Routes>
//      <Route path="/" element={<Home />} />
//      <Route path="/about" element={<About />} />
//      <Route path="/shop" element={<Shop />} />
//      <Route path="/service" element={<Service />} />
//      <Route path="/contact" element={<Contact />} />
//      </Routes>
//     </div>
//     </BrowserRouter>
//   )
// }
// import React from 'react'
// import './Appme.css'
// import Form from './Form'

// export default function App() {
//   return (
//     <div className='App'>
//       <Form />
//     </div>
//   )
// }

import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LadingPage from './components/pages/LadingPage'
import HomePage from './components/pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
                    <Route path="/" element={ <LadingPage /> } />
                    <Route path="/home" element={ <HomePage /> } />
    </Routes>
    </div>
    </BrowserRouter>
  )
}
