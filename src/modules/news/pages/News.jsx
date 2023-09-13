import React from "react";
import Hero from "../../../components/Hero/Hero";
import Schoolnews from "../Component/Schoolnews"
import homepic from "../../../assets/homepic.jpg"

export default function News() {

  return (
    <div>
      <Hero homepic={homepic}
      title="News"
       desc="Another free template by Untree.Far far away,
       behind the word mountains,far from the countries Vokalia and Cononanitia,
       there live." 
      button="Explore courses"/>
      <Schoolnews/>
    </div>
  );
}
