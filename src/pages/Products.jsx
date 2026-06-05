import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/ui/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Products() {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const getData = async ()=>{
        setLoading(true);
        const fetchData = await fetch('https://api.escuelajs.co/api/v1/products');
        const res = await fetchData.json();
        setLoading(false);
        setData(res);
    };
    useEffect(()=>{
        getData();
    },[]);
    

    return(
        <>
        <h1>products</h1>
        {loading && (<Loading />)}
        <section id="products">
        <div className="container">
            <div className="row">
                {!loading && data.map(item=>
                    <div className="col-lg-3 mb-3" key={item.id}>
                        <div className="card">
                          <img src={item.images} className="card-img-top object-fit-contain img-fluid"/>
                          <div className="card-body">
                            <h5 className="card-title text-truncate">{item.title}</h5>
                            <p className="card-text text-price">قیمت: {item.price}$</p>
                            <div className="row">
                            <button className="btn btn-custom btn-sm col-7"
                             >افزودن به سبد خرید</button>
                            <Link to={"/products/" + item.id} target="_blank"
                             className="btn border-0 btn-more btn-sm col-5">جزئیات بیشتر
                                <FontAwesomeIcon icon="fa-solid fa-angle-left"></FontAwesomeIcon>
                            </Link>
                            </div>
                          </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </section>
        </>
    );
}
export default Products;
