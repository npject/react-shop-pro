import { Link } from 'react-router-dom';
import imgPageNotFound from 'assets/img/svg/undraw_page-not-found_6wni.svg';

function PageNotFound() {
    //const body = document.querySelector('body');
    //body.style.backgroundColor = '#DDE6EA';
    

    return(
        <>
        <div className='container-fluid' style={{ backgroundColor: '#DDE6EA' }} >
        <div className='container py-5' id='p-404'>
            <div className='row'>
                <h3 className='mb-1' >صفحه مورد نظر یافت نشد!</h3>
                <div className='row'>
                <img src={imgPageNotFound} className='mx-auto' style={{width:'700px'}}/>
                </div>
                <Link to={"/"} className='btn-grad mx-auto col-3 text-decoration-none'>بازگشت به صفحه اصلی</Link>
            </div>
        </div>
        </div>
        </>
    );
}
export default PageNotFound;   
