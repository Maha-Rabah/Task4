import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchStudents } from "../slice/students.slice";
import { useDispatch } from "react-redux";
import {CardBox} from "../../../components/Cards/CardBox";

export default function Students() {

  const data=useSelector(state=>state?.students?.data)
  const disPatch=useDispatch();

  useEffect(() => {
    disPatch(fetchStudents());
}, []);

  return (
    <div className='secondery-pages studentPage'>
    <div className='studentPage-content'>
        <div className="studentPage-title Main-title">
            <h2>
            Our Students
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