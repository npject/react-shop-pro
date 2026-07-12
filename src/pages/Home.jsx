import { Link } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "context";
import CategorySlider from "components/sliders/categorySlider";
import categorySliderData from "/src/data/categories.json";
import OnlineShoppingSvg from "assets/img/svg/undraw_online-shopping_hgf6.svg?react";
import TopProductsSlider from "components/sliders/TopProductsSlider";

function Home() {
    const {color} = useContext(themeContext);

    return(
        <>
        <div data-theme={color} data-bs-theme={color} id="home" >  
            <div className="container-fluid g-0">
                <CategorySlider data={categorySliderData} />    
            </div>      
            <section>
                <div className="container">
                    <div className="row my-5 py-5">
                        <div className="col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center align-items-start">
                            <h2 className="h2">
                                تجربه ای متفاوت از خرید آنلاین!
                            </h2>
                            <p className="text-body-secondary mt-3 mb-5">
                            بهترین برندها و جدیدترین محصولات را در یک کلیک پیدا کنید.
                            </p>
                            <Link to={'/products'} >
                                <button className="btn btn-custom shadow-sm">
                                    مشاهده تمام محصولات
                                </button>
                            </Link>
                        </div>
                        <div className="col-md-6 col-8 mx-auto order-1 order-md-2 mb-5 mb-md-0">
                            <OnlineShoppingSvg className="w-100 img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid g-0 my-5">
                <div className="container">
                    <h3 className="h3">محصولات برتر</h3>
                </div>
                <TopProductsSlider data={categorySliderData} />
            </div>
        </div>
        
        </>
    );
}
export default Home;
