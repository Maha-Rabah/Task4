
import { useEffect } from 'react';
import './Courses.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from './../slice/courses.slice'
import {CardBox} from './../../../components/Cards/CardBox';


export default function CoursesPage() {
    const data = useSelector((state) => state.courses.courses);
    const dispatch = useDispatch();
    let controler;

useEffect(() => {
    dispatch(fetchCourses());
 },[]);

 const search = async (value) => {
    if (controler) {
        controler.abort();
    }

    controler = new AbortController();
    dispatch(searchCourses(value, controler.signal));
};

return(
    <div className='secondery-pages coursesPage'>
        <div className='coursesPage-content'>
            <div className="coursesPage-title main-title">
                <h1>The Courses</h1>
                </div>
                <div className='container cards-content'>
                        {data.length &&
                        data?.map((item,index)=> (
                            <CardBox key={index} 
                            cardimg={item.cardImg} 
                            lessonNum={item.lessonNumber} 
                            rate={item.rating} 
                            title={item.titleLess} 
                            desc={item.describtion} 
                            price={item.priceLess}
                            id={item.id}
                            button={item.button}
                            />
                        )) }
                    </div>
                
                </div> 
            </div>
        );
    }