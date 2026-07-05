import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CategorySlider ({data}) {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={{
                nextEl: '.custom-next-btn',
                prevEl: '.custom-prev-btn'
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            speed={900}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
            id='categorySwiper'
        >
            {Object.entries(data.categories).map(([key, value], index) => (
                
                <SwiperSlide key={index}>
                    <div className='row'>
                        <div className='col-12 col-lg-6 text-center'>
                            <img className='category-image img-fluid object-fit-contain' src={`/src/assets/img/svg/categories/${value.illustration}`} />
                        </div>
                        <div className='col-12 col-lg-6'>
                            <h1 className='mb-3 text-center text-lg-end mt-3 mt-lg-0'>{key}</h1>
                            <div className='d-flex flex-row flex-wrap gap-3 category-links justify-content-center justify-content-lg-start align-items-center align-items-lg-start px-3 px-lg-0'>
                                {value.items.map((item, index) => (
                                    <Link to={`/products?category=${item.slug}&page=1`} key={index} target='_blank' className='text-black text-decoration-none'>
                                    <div className='category-item d-flex flex-row flex-lg-column justify-content-center align-items-center rounded-2 text-center p-lg-2'>
                                        <div className='category-icon d-flex flex-column justify-content-center align-items-center rounded-circle shadow-sm' style={{ backgroundColor: item.color }}>
                                            <FontAwesomeIcon icon={item.icon} className='fs-5' />
                                        </div>
                                        <span className='fs-14 ps-2 pe-3 pe-lg-2 py-1 rounded-2 mt-lg-2 shadow-sm' style={{ backgroundColor: item.color }}>{item.name}</span>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>    

            ))}
            <div className="autoplay-progress position-absolute d-flex justify-content-center align-items-center fw-bold" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle} className='position-absolute start-0 top-0 w-100 h-100'>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
            <button className='btn custom-prev-btn position-absolute d-flex justify-content-center align-items-center fs-2 p-0 rounded-circle'>
                <FontAwesomeIcon icon='fa-solid fa-circle-right' />
            </button>
            <button className='btn custom-next-btn position-absolute d-flex justify-content-center align-items-center fs-2 p-0 rounded-circle'>
                <FontAwesomeIcon icon='fa-solid fa-circle-left' />
            </button>
        </Swiper>   
        
        </>
    );
}
export default CategorySlider;
