import React from 'react'
import './style/aboutcoursescards.css'
import { BsBook } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Aboutcoursescard = ({cardimg,num,rate,title,desc,price}) => {
  return (
    <div>
 <div className="Courses-card">
    <img className="card-img" src={cardimg} alt="" />
    <div className="card-info">
        <span className="card-num"><BsBook className="card-icon"/>{num} lessons</span>
        <span className="card-rate"><AiFillStar className="card-icon"/>{rate}</span>
    </div>
    <div className="Courses-card-title">{title}</div>
    <div className="Courses-card-desc">{desc}</div>
    <div className="Courses-details">
        <span className="card-price">$ {price} </span>
        <span className="more">learn more</span>
    </div>
</div>
    </div>
  )
}

export default Aboutcoursescard