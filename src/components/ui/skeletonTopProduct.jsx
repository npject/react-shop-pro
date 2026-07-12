import RatingStars from "components/ui/RatingStars";

function SkeletonTopProduct () {
    return (
        <>
        <div className="card shadow-sm">
            <div className="card-img-top placeholder-glow">
                <div className="w-100 placeholder h-100"></div>
            </div>
            <div className="card-body">
                <div className="placeholder-glow text-center">
                    <span className="card-title placeholder placeholder-sm col-8"></span>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-evenly my-2">
                    <RatingStars rating={0} />
                    <div className="placeholder-glow col-2">
                        <span className="text-body-secondary placeholder placeholder-sm col-12"></span>
                    </div>
                </div>
                <div className="placeholder-glow text-center">
                    <span className="card-text text-price placeholder placeholder-sm col-6"></span>
                </div>
            </div>
        </div>
        </>
    );
}
export default SkeletonTopProduct;
