import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import { useContext, useState } from "react";
import { themeContext } from "/src/context/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SinglePost () {
    const { color } = useContext(themeContext);
    const {response} = useLoaderData();
    const [loading, setLoading] = useState(true);
    console.log(response);


    return (
        <>
        <section id="single-post" data-bs-theme={color}>
            <div className="container-fluid intro">
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                            <h1 className="display-5 mb-3 color-main">{response[0].title}</h1>
                            <p className="fs-4">{response[0].body}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="main-content-post"> 
                <div className="row">
                    <div className="col-lg-12 mb-4">
                        {loading && (
                            <div className="placeholder-glow skeleton-post-image w-100">
                                <div className="placeholder w-100 h-100"></div>
                            </div>
                        )}
                        <img src={`https://picsum.photos/seed/${response[0].id}/1200/675`}
                         className={`w-100 img-fluid img-single-post ${loading ? 'd-none' : 'd-block'}`}
                         onLoad={() => {setLoading(false)}} />
                    </div>
                    <div className="col-lg-12 mb-5">
                        <p>
                            {response[0].body}
                            {response[0].body}
                            {response[0].body}
                        </p>
                        <p>
                            {response[0].body}
                            {response[0].body}
                            {response[0].body}
                            {response[0].body}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-0 comments py-3 my-5">
                <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    speed={600}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        clickable:true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            centeredSlides: false,
                        },
                        992: {
                            slidesPerView: 3
                        }
                    }}
                    className="mySwiper swiper-comments w-100"
                >
                    {response[1].map(item =>
                        <SwiperSlide key={item.id}>
                            <div className="card">
                                <div className="border rounded-circle mx-auto d-flex justify-content-center align-items-center">
                                    <FontAwesomeIcon icon="fa-solid fa-user-pen" className="text-body-emphasis"/>
                                </div>
                                <div className="card-body h-100 d-flex flex-column justify-content-center align-items-center">
                                    <p className="text-center text-body-text-body-emphasis fs-14">{item.body}</p>
                                    <span className="text-body-secondary fs-14">{item.name}</span>
                                    <span className="text-body-tertiary fs-14">{item.email}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}    
                </Swiper>
            </div>
        </section>
        </>
    );
}
export default SinglePost;
