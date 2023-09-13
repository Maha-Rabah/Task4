import React from 'react'
import './style/CategorypartsStyle.css'

const Catrgoryparts = ({tit,num,icon}) => {
  return (
      <div className="gate-card">
        <div className='card-icon'>
           <i>{icon}</i>
         </div>
         
         <div className='info'>
            <h3>{tit}</h3>
            <p>{num}</p>
        </div>
     </div>
  )
}

export default Catrgoryparts