import React from 'react'
import './GlobalnavStyle.css'

const GlobalNavbar = ({list}) => {
  return (
    <nav className='top'>
    <div className="main-nav">
    <ul className='left'>
    <li><i>{list[0].icons}</i><a href="#">{list[0].name}</a></li>
    <li><i>{list[1].icons}</i><a href="#">{list[1].name}</a></li>
    <li><i>{list[2].icons}</i><a href="#">{list[2].name}</a></li> 
    </ul>
    <ul className='right'>
    <li><i>{list[3].icons}</i><a href="#">{list[3].name}</a></li> 
    <li><i>{list[4].icons}</i><a href="#">{list[4].name}</a></li>  
    </ul>
    </div>
    </nav>
  )
}

export default GlobalNavbar