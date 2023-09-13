
import Hero from "../../../components/Hero/Hero";
import homepic from '../../../assets/homepic.jpg'
import Section from "../../main/components/Section";
import { useState } from "react";
import secimg from "./../../../assets/secimg.webp"
import Secondsection from "../../main/components/Secondsection";

export default function About() {
  const [sectitle] = useState("Become an instructor")
  const [seclist] = useState(["Behined the word Mountain",
  "Far far away Mountain","Large language ocean"])
  const [sectext] = useState("Far far away,behind the word,far from the countries Vokalia and consonantia there live the blind texts.")
  const [secbutton] = useState("Get Started")
  return (
    <div>
       <Hero homepic={homepic}
       title="About Us"
       desc="Another free template by Untree.Far far away,
       behind the word mountains,far from the countries Vokalia and Cononanitia,
       there live." 
      button="Explore courses"/>
      <Section secimg={secimg} sectitle={sectitle} sectext={sectext} 
      list={seclist} button={secbutton}/>

      <Secondsection/>
    </div>
  );
}
About
