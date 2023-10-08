import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchTeachers } from "../slice/teachers.slice";
import { useDispatch } from "react-redux";
import {CardBox} from "../../../components/Cards/CardBox";

export default function Teachers() {

  const data=useSelector(state=>state?.teachers?.data)
  const disPatch=useDispatch();

  useEffect(() => {
    disPatch(fetchTeachers());
}, []);

  return (
    <div className='secondery-pages teachersPage'>
    <div className='teachersPage-content'>
        <div className="teachersPage-title Main-Title">
            <h2>
            Our Teachers
            </h2>
            </div>
            <div className='container cards-content'>
                    {data.length &&
                    data?.map((item,index)=> (
                        <CardBox key={item.id} 
                        cardimg={item.image} 
                        lessonNum={item.password} 
                        rate={item.age} 
                        title={item.firstName} 
                        desc={item.lastName} 
                        price={item.height}
                        />
                    )) }
                </div>
            </div> 
        </div>
    );
}