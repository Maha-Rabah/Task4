import React,{useState} from "react";
import Hero from "../../../components/Hero/Hero";
import Category from "../components/Category";
import Section from "../components/Section";
import secimg from './../../../assets/secimg.webp'
import secondimg from './../../../assets/secondimg.webp'
import Secondsection from "../components/Secondsection";
import homepic from './../../../assets/homepic.jpg'
import Aboutcourses from "../components/aboutcourses";
import hero2 from "../../../assets/hero2.webp"


export default function Main() {
  const [sectitle] = useState("Become an instructor")
  const [seclist] = useState(["Behined the word Mountain",
  "Far far away Mountain","Large language ocean"])
  const [sectext] = useState("Far far away,behind the word,far from the countries Vokalia and consonantia there live the blind texts.")
  const [secondtitle] = useState("About Us")
  const [secondlist] = useState(["Behined the word Mountain",
  "Far far away Mountain","Large language ocean"])
  const [secbutton] = useState("Get Started")

  const [secondbutton] = useState("Admision")



  return (
    <div>
      <Hero 
      homepic={homepic}
       title= "watch the video" 
       desc="Eduction is the Mother of Leadership" 
      button="Explore courses"/>
      <Category Categorytitle="Browse Top Category"/>
      <Section secimg={secimg} sectitle={sectitle} sectext={sectext} 
      list={seclist} button={secbutton}/>
      <Secondsection/>
      <Aboutcourses />
      <Hero homepic={hero2}
      title="Eduction for Tomorrow's Leaderes" 
      desc="Far far away,behind the word,far from the countries Vokalia and 
      consonantia,there live the blind texts."
      button="Enroll Now"/>
      <Section secimg={secondimg} sectitle={secondtitle} sectext={sectext}
       list={secondlist} button={secondbutton}/>

    </div>
  );
}