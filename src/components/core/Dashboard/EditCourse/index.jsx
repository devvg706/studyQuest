import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { useParams } from 'react-router-dom';
import { setCourse, setEditCourse } from '../../../../slices/courseSlice';
import RenderSteps from '../AddCourse/RenderSteps';
import Spinner from '../../../common/Spinner'

const EditCourse = () => {
    const dispatch = useDispatch();
    const {courseId} = useParams();
    console.log("this is courseId from params in editcourse", courseId);
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state)=>state.auth);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        const populateCourseDetails = async () => {
            setLoading(true);
            const result = await getFullDetailsOfCourse(courseId,token);
            console.log("this is result from getFullCourseDetails in editcourse", result);
            if(result?.courseDetails){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails))
            }
            setLoading(false);
        }
        populateCourseDetails();
    },[])
    if(loading){
        return (
            <div>
                <Spinner></Spinner>
            </div>
        )
    }
    
  return (
    <div>
        <h1 className='text-yellow-50 text-lg'>Edit Course</h1>
        <div>
            {
                course ? (
                    <RenderSteps/>
                ) : (<p>Course Not Found</p>)
            }
        </div>
    </div>
  )
}

export default EditCourse