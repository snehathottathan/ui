import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
export default function Home() {
  return (
    <div className='banner'>
      <div className='content'>
        <div>
        <h1>Bettter digital experience with Ninestars</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        </div>
        {/* <div> */}
        <Button className='button'><Link to="/About" style={{textDecoration:'none',color:'white'}}>Get started</Link></Button>
      {/* </div> */}
        </div>
        <div className='image-header'>
        <img className='imgae' src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg"></img>
      </div>
    </div>
  )
}
