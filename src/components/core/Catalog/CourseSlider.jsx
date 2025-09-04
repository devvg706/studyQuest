import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Course_Card from './Course_Card';
import { Navigation } from 'lucide-react';

const CourseSlider = ({ Courses }) => {
  return (
    <div>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={25}
          pagination={[Autoplay,Pagination,Navigation]}
          className='mySwiper'
          autoplay={{
            delay:1000,
            disableOnInteraction:false,
          }}
          navigation={true}
          breakpoints={{
            1024:{slidesPerView:3}
          }}
          
        >
          {Courses.map((course, index) => (
            <SwiperSlide key={index}>
              <Course_Card course={course} Height={"h-250px"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No courses Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
