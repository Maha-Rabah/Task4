import React from 'react'
import './HeroStyle.css'

const Hero = ({homepic,title,desc,button}) => {
  return (
    <div className='Hero'>
      <img src={homepic} alt="" />
      <div className="overlay"></div>
       <div className="Hero-text">
         <h1>{title}</h1>
         <p>{desc}</p>
         <button>{button}</button>
       </div>
    </div>
  
  )
}

export default Hero