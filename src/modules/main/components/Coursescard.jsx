import React from 'react'
import './style/CoursecardsStyle.css'

const Sectioncard = ({icon,cardtitle,cardparg}) => {
  return (
    <div className='course-card'>
        <i>{icon}</i>
        <h3>{cardtitle}</h3>
        <p>{cardparg}</p>
    </div>
  )
}

export default Sectioncard