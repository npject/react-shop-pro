import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopProducts } from "services";
import { Loading, RatingStars, SkeletonTopProduct } from "components/ui";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode, Autoplay } from 'swiper/modules';


function TopProductsSlider ({ data }) {
    //const colorMap = {};
    const [loading, setLoading] = useState(false);
    const [topProducts, setTopProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(0);
    const [alertMsg, setAlertMsg] = useState('');
    
    const getData = async () => {
        setLoading(true);
        try {
            const { response } = await fetchTopProducts();
            const filterProducts = await response.products.filter(products => products.rating >= 4.7);
            setTopProducts(filterProducts);
            setAlertMsg('');
        }catch (error) {
            console.log("error fetching top products::",error);
            setAlertMsg('اتصال اینترنت خود را بررسی کنید!');
        }finally {
            setLoading(false);
        }
    }

    const colorMap = useMemo(() => {
        const map = {};
        
        const flatCategories = Object.values(data.categories).flatMap(mainCategory => mainCategory.items).flat();
        
        flatCategories.forEach(item => {
            map[item.slug] = item.color;
        });

        return map;
    },[data])

    // const flatCategories = (data) => {
    //     return Object.values(data.categories).flatMap(mainCategory => mainCategory.items).flat();
    // }

    useEffect(() => {
        getData();
        // flatCategories(data).forEach(item => {
        //     colorMap[item.slug] = item.color;
        // });
        console.log("ColorMap:", colorMap);
    },[]);    


    return (
        <>
        {loading && <Loading />}
        {alertMsg && (
            <div className="container">
                <div className="alert alert-danger">{alertMsg}</div>
            </div>
        )}
        <Swiper
            slidesPerView={2}
            spaceBetween={20}
            freeMode={{
                enabled: true,  // فعال کردن حالت Free Mode: به کاربر اجازه می‌دهد اسلایدها را سریع‌تر بکشد و متوقف کند.
                // مثل وقتی یک آیتم را در هوا رها می‌کنی و خودش کمی حرکت می‌کند.
                
                momentum: false,  // خاموش کردن "Momentum" در Free Mode: 
                // اگر true بود، بعد از رها کردن اسلایدر، به حرکتش ادامه می‌داد تا خودش متوقف شود.
                // false یعنی بعد از رها کردن، اسلایدر سریع‌تر وایمیستد (کنترل بیشتر برای کاربر).

                sticky: false,  // فعال/غیرفعال کردن "چسبندگی" اسلایدها در Free Mode:
                // اگر true بود، اسلایدر بعد از توقف، خودش را به نزدیک‌ترین اسلاید کامل می‌چسباند.
                // false یعنی هر جا کاربر رها کرد، همان جا می‌ماند.
                // (معمولاً برای اسلایدرهای مارکی یا تعداد آیتم زیاد، sticky=false بهتر است)
            }}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 100,   // مدت زمان مکث (به میلی‌ثانیه) بین هر اسلاید در حالت پخش خودکار.
                // delay: 0 معمولا باعث رفتار نامنظم می‌شود؛ 100ms مکث بسیار کوتاهی است.

                disableOnInteraction: false,    // اگر false باشد: تعامل کاربر (مثل کلیک یا کشیدن) پخش خودکار را متوقف نمی‌کند.
                // اگر true باشد: با اولین تعامل کاربر، autoplay متوقف می‌شود.
                // ✅ برای اسلایدر فروشگاهی که می‌خواهیم همیشه حرکت کند: false

                waitForTransition: true,    // اگر true باشد: autoplay منتظر می‌ماند تا انیمیشن اسلاید قبلی کامل شود، سپس اسلاید بعدی را شروع می‌کند.
                // این کار از "پرش" یا "گپ" در حرکت جلوگیری می‌کند.
                // ✅ برای حرکت پیوسته و نرم: true

                pauseOnMouseEnter: true,    // اگر true باشد: وقتی موس روی اسلایدر قرار می‌گیرد، autoplay موقتاً متوقف می‌شود.
                // ✅ برای اینکه کاربر بتواند با آرامش اسلایدها را ببیند: true

                stopOnLastSlide: false    // اگر false باشد: وقتی به آخرین اسلاید می‌رسد (و loop فعال است)، autoplay ادامه می‌دهد و به اول برمی‌گردد.
                // اگر true باشد: autoplay در آخرین اسلاید متوقف می‌شود (اگر loop فعال نباشد).
                // ✅ در حالت loop: false
            }}
            grabCursor={true}
            modules={[FreeMode, Autoplay]}
            breakpoints={{
                576: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 6
                }
            }}
            className="mySwiper"
            id="topProductsSwiper"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => { 
                setCurrentIndex(swiper.realIndex);
                setTotalSlides(swiper.slides.length);
            }}
        >
            {loading && [...Array(6)].map((_,i) => (
                <SwiperSlide key={i} >
                    <SkeletonTopProduct />    
                </SwiperSlide>
            ))}
            {!loading && topProducts.map(item => (
                <SwiperSlide key={item.id} >
                    <div className="card shadow-sm" style={{ borderColor: colorMap[item.category] || '#ccc' }}>
                        <div style={{ backgroundColor: colorMap[item.category] || '#fff' }} className="card-img-top position-relative overflow-hidden" >
                           
                            <Link to={`/products?category=${item.category}&page=1`} target="_blank" >
                                <div className="badge badge-top position-absolute fs-14 text-dark shadow-sm"
                                style={{ backgroundColor: colorMap[item.category] }} >{item.category}</div>
                            </Link>

                            <Link to={`/products/${item.id}`} target="_blank" >
                                <div className="badge badge-bottom position-absolute fs-14 text-dark shadow-sm"
                                style={{ backgroundColor: colorMap[item.category] }} >مشاهده محصول</div>
                            </Link>

                            <img src={item.thumbnail} className="object-fit-contain w-100 img-fluid" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-truncate text-center fs-6">{item.title}</h5>
                            <div className="d-flex flex-wrap align-items-center justify-content-evenly my-2">
                                <RatingStars rating={item.rating} />
                                <span className="text-body-secondary">{item.rating}</span>
                            </div>
                            <p className="card-text text-price text-center">قیمت: {item.price}$</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))} 
        </Swiper>
        <div className="w-100">
            <div className="container ">
                <div className="w-100 d-inline-flex align-items-center gap-2">
                <span className="color-main">{currentIndex + 1}</span>
                <div className="col-4 col-md-3 col-lg-2 bg-secondary-subtle rounded-5 overflow-hidden" style={{ height: '3px', transition: 'all ease-in-out .3s' }} >
                    <div className="h-100 bg-main" style={{ 
                        width: `${((currentIndex +1) / totalSlides) *100}%` 
                    }}></div>
                </div>
                <span className="color-main">{totalSlides}</span>
                </div>
            </div>
        </div>                
        </>
    );
}
export default TopProductsSlider;
