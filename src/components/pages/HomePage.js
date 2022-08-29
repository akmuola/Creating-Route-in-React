import React from 'react'
import { Link } from 'react-router-dom'
export default function HomePage() {
  return (
    <div className='home-page-title text-center'>
     <h1 className="main-title">welcome to our app</h1>
            <Link to="/">
            <button className="primary-button">Log out</button>
            </Link>
    </div>
  )
}
