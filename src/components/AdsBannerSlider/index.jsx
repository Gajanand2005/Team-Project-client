import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';
const AdsBannerSlider = (props) => {
  return (
    <div className='py-5 w-full h-full'>
       <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              ><SwiperSlide>
           <BannerBox img='https://serviceapi.spicezgold.com/download/1759938778050_30745.jpg' link={'/'} />
            </SwiperSlide>

            
             <SwiperSlide>
           <BannerBox img='https://serviceapi.spicezgold.com/download/1759938751802_30744.jpg' link={'/'} />
            </SwiperSlide>

             <SwiperSlide>
           <BannerBox img='https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg' link={'/'} />
            </SwiperSlide>

               <SwiperSlide>
           <BannerBox img='https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg' link={'/'} />
            </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default AdsBannerSlider
