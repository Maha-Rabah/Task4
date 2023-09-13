import React from 'react'
import {SlCalender} from "react-icons/sl"
import {BsFillPersonFill} from "react-icons/bs"
import "./Schoolcard.css"

const Schoolcard = ({img,cardTitle,date,desc}) => {
  return (
    <div>
         <div className="SchoolCard">
    <div className="Card-left">
        <img className="Card-left-img" src={img} alt="" />
    </div>
    <div className="Card-right">
        <h1>{cardTitle}</h1>
        <span className="Card-right-span"><SlCalender className="Card-right-icon"/> {date} <BsFillPersonFill className="Card-right-icon"/> admin</span>
        <p>{desc}</p>
  
    </div>
</div>
</div>
  )
}

export default Schoolcard