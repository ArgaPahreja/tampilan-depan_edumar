import React from "react"
import { Card, CardGroup } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left '>
          <h1>
              Let's Level Up Your
              English With Us!
            </h1>
            <button className='primary-btn'>Get Started</button>
          </div>
            <div className='img'>
              <img src='./assets/home.png' alt='' />
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export default Home
