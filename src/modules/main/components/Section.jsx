import React from 'react'
import {GiCheckMark} from 'react-icons/gi';
import './style/SectionStyle.css'
const Section = ({secimg,sectitle,sectext,list,button}) => {
  return (
   <div className="section-container">
    <div className='con-sec'>
        <div className="info">
            <h1>{sectitle}</h1>
            <p>{sectext}</p>
            <ul>
                <li><GiCheckMark className='icon'/> {list[0]}</li>
                <li><GiCheckMark className='icon'/> {list[1]}</li>
                <li><GiCheckMark className='icon'/> {list[2]}</li>
            </ul>
            <button>{button}</button>
        </div>
        <div className="img">
            <img src={secimg} alt=""/>
        </div>
    </div>
  </div> 
  )
}

export default Section