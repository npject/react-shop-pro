function SkeletonProduct () {
    return (
        <>
        <div className="col-lg-3 mb-3 skeleton-product">
            <div className="card shadow-sm">
                <div className="placeholder-wave">
                    <div className="card-img-top w-100 img-fluid placeholder"></div>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-truncate placeholder-wave">
                        <span className="placeholder col-11"></span>...
                    </h5>
                    <p className="card-text text-price placeholder-wave">
                        <span className="placeholder col-4"></span>$
                    </p>
                    <div className="row">
                        <button className="btn btn-custom btn-sm col-7 shadow-sm placeholder"></button>
                        <div className="col-5 placeholder-wave">
                            <button className="btn border-0 btn-more btn-sm col-11 placeholder placeholder-xs py-0"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default SkeletonProduct;
