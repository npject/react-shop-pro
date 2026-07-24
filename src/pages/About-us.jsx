import { Link } from 'react-router-dom';
import { useContext } from "react";
import { themeContext } from "context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialDashboardSvg from 'assets/img/svg/undraw_social-dashboard_81sv.svg?react';


function AboutUs() {
    const {color} = useContext(themeContext);

    return(
        <>
        <div className='container' id='about-us' data-bs-theme={color} data-theme={color}>
            <div className='row my-5'>
                <div className="col-lg-6 order-last order-lg-first d-flex flex-column justify-content-center align-items-start">
                    <h2 className='h2 mb-4'>درباره ما</h2>
                    <p className='text-body-secondary'>
                    ما یک فروشگاه آنلاین مدرن هستیم که هدفمان راحتی شما در خرید است. کیفیت و سرعت اولویت ماست.
                    </p>
                    <p className='text-body-tertiary'>
                        ما را در شبکه های اجتماعی دنبال کنید
                    </p>
                    <div className='social-media d-inline-flex gap-2'>
                        <Link to={'#'} className='color-main fs-4 social-link'>
                            <FontAwesomeIcon icon={'fa-brands fa-instagram'}></FontAwesomeIcon>
                        </Link>
                        <Link to={'#'} className='color-main fs-4 social-link'>
                            <FontAwesomeIcon icon={'fa-brands fa-facebook'}></FontAwesomeIcon>
                        </Link>
                        <Link to={'#'} className='color-main fs-4 social-link'>
                            <FontAwesomeIcon icon={'fa-brands fa-youtube'}></FontAwesomeIcon>
                        </Link>
                        <Link to={'#'} className='color-main fs-4 social-link'>
                            <FontAwesomeIcon icon={'fa-brands fa-twitter'}></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 order-first order-lg-last mb-3 mb-lg-0">
                    <SocialDashboardSvg className='w-100 img-fluid' id='social-dashboard-svg' />
                </div>
            </div>
        </div>
        </>
    );
}
export default AboutUs;
