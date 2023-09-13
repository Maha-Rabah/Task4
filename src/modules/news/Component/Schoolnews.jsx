import React from 'react'
import { useState } from 'react'
import firstImg from "./../../../assets/pic1.webp"
import firstImg2 from "./../../../assets/pic2.webp"
import firstImg3 from "./../../../assets/pic3.webp"
import firstImg4 from "./../../../assets/pic4.webp"
import firstImg5 from "./../../../assets/pic5.webp"
import firstImg6 from "./../../../assets/pic6.webp"

import Schoolcard from './Schoolcard'

const Schoolnews = () => {
    const [schooltitle] = useState("School News")
    const [schoolparg] = useState("Far far away,behind the word,far from the countries Vokalia and consonantia,there live the blind texts.")

    const SchoolData = [
        {
            id : "1",
            img : firstImg,
            cardTitle : "education for tomorrow's leaders",
            date : "august 8 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
        {
            id : "2",
            img : firstImg2,
            cardTitle : "enroll your kids this summer to get 30% off",
            date : "august 11 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
        {
            id : "3",
            img : firstImg3,
            cardTitle : "education for tomorrow's leaders",
            date : "august 8 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
        {
            id : "4",
            img : firstImg4,
            cardTitle : "enroll your kids this summer to get 30% off",
            date : "august 11 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
        {
            id : "5",
            img : firstImg5,
            cardTitle : "education for tomorrow's leaders",
            date : "august 8 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
        {
            id : "6",
            img : firstImg6,
            cardTitle : "enroll your kids this summer to get 30% off",
            date : "august 11 , 2023",
            desc : "far far away ,behind the work mountains , far from the countries Vokalia and Consont there live the blind texts . Separated they live",
        },
    ]
    
    const Cards = SchoolData.map((item) => {
        return (<Schoolcard key = {item.id} 
        img = {item.img}
        cardTitle = {item.cardTitle}
        date = {item.date}
        desc = {item.desc}
        />)
    })
  return (
    <div className="SchoolNews">
        <div className="Main-Title">
            <h2>{schooltitle}</h2>
            <p>{schoolparg}</p>
        </div>
    <div className="Schoolcontainer container">
    {Cards}
    </div>
</div>
  )
}

export default Schoolnews