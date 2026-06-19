import imgPageNotFound from 'assets/img/svg/undraw_page-not-found_6wni.svg';

function PageNotFound() {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#DDE6EA';
    

    return(
        <>
        <div className='container my-5' id='p-404'>
            <div className='row'>
                <h3 className='mb-1' >صفحه مورد نظر یافت نشد!</h3>
                <div className='row'>
                <img src={imgPageNotFound} className='mx-auto' style={{width:'700px'}}/>
                </div>
                <button className='btn-grad mx-auto col-3'>بازگشت به صفحه اصلی</button>
            </div>
        </div>
        </>
    );
}
export default PageNotFound;   
