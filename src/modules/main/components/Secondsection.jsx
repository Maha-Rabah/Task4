import React, { useState } from 'react'
import Coursescard from './Coursescard'
import {FiMusic} from 'react-icons/fi'
import {BiMath} from 'react-icons/bi'
import {FiBook} from 'react-icons/fi'
import {BsBook} from 'react-icons/bs'
import {GrHistory} from 'react-icons/gr'
import {GiMusicalNotes} from 'react-icons/gi'
import './style/SecondsectionStyle.css'




const Secondsection = () => {
    const [sectitle] = useState("We Have Best Eduction")
    const [secparg] = useState("Far far away,behind the word,far from the countries Vokalia and consonantia,there live the blind texts.")
  return (
    <div className='edu-container'>
      <div className='Main-Title'>
        <h2>{sectitle}</h2>
        <p>{secparg}</p>
        </div>
        <div className="cards-container">
        <Coursescard icon={<FiMusic/>} cardtitle="Music Class" cardparg={secparg} />
        <Coursescard icon={<BiMath/>} cardtitle="Math Class" cardparg={secparg} />
        <Coursescard icon={<BsBook/>} cardtitle="English Class" cardparg={secparg} />
        <Coursescard icon={<FiBook/>} cardtitle="Reading for Kids" cardparg={secparg} />
        <Coursescard icon={<GrHistory/>} cardtitle="History Class" cardparg={secparg} />
        <Coursescard icon={<GiMusicalNotes/>} cardtitle="Music" cardparg={secparg} />
        </div>
    </div>
  )
}

export default Secondsection