import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'
import coursesSlice from "../modules/courses/slice/courses.slice";
import teachersSlice from "../modules/teachers/slice/teachers.slice";
import studentsSlice from "../modules/students/slice/students.slice";


const reducers = {
    reducer : {
        courses: coursesSlice,
        teachers: teachersSlice,
        students: studentsSlice,
    },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;