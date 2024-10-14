import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Heropageitems from './Heropageitems';
import './Heropage.css'

function Heropage() {

    return (
        <>
            <div className="container1">
                <Swiper className='myswiper'
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={1500}
                    effect={'slide'}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.pagination',
                        clickable: true
                    }}
                >
                    {Heropageitems.map((data, index) => (
                        <SwiperSlide key={index} className='swiper-slide'>
                            <div className="slide-container">
                                <div className="slide-image">
                                    <img src={data.image} alt={data.name} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="slide-image-content">
                                    <h4 className='slide-image-heading1'>{data.heading1}</h4>
                                    <h3 className='slide-image-heading2'>{data.heading2}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="pagination">
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default Heropage;






