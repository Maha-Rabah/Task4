import React,{useState} from 'react'
import { MdAddBox } from 'react-icons/md'
import Aboutcoursescard from './Aboutcoursescard'
import firstImg from './../../../assets/firstImg.webp'
import secondImg from './../../../assets/secondImage.webp'
import thirdImg from './../../../assets/thirdimage.webp'


const Aboutcourses = () => {
    const [thirdtitle] = useState("The Right Course for you")
    const [thirdesc] = useState("Far far away,behind the word,far from the countries Vokalia and consonantia,there live the blind texts.")
const theData = [
    {
        id : "firstCourse",
        cardimg : firstImg,
        num : 44,
        rate : 4.3,
        title : "education program title1" ,
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem?",
        price : 85.66
    },
    {
        id : "secondCourse",
        cardimg : secondImg,
        num : 41,
        rate : 4.9,
        title : "education program title2" ,
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem?",
        price : 80.33
    },
    {
        id : "thirdCourse",
        cardimg : thirdImg,
        num : 53,
        rate : 4,
        title : "education program title3" ,
        desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem?",
        price : 70.44
    }
]
const theCards = theData.map((item)=> {
    return (<Aboutcoursescard key = {item.id}
   cardimg = {item.cardimg}
    num = {item.num}
    rate = {item.rate}
    title = {item.title}
    desc = {item.desc}
    price = {item.price}/>)
    
})
  return (
    <div className='courses-con'>
        <div className='Main-Title'>
        <h2 >{thirdtitle}</h2>
        <p>{thirdesc}</p>
        </div>
        <div className="con-cards">
            {theCards}
        </div>
    </div>
  )
}


export default Aboutcourses