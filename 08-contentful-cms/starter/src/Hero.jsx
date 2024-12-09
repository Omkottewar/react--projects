import React from 'react'
import HeroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque enim hic consectetur ipsam omnis expedita dolorum, et ipsum voluptate aspernatur repellendus veniam provident reprehenderit facilis quas. Labore quam eum unde.
            </div>
            <div className="img-container">
        <img src={HeroImg} alt="" className='img'/>
            </div>
        </div>
    </section>
)
}

export default Hero