import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SelectionContext } from "context";
import { useProductCardSelection } from "hooks";


function ProductCart ({ item }) {
    const { checkedItems } = useContext(SelectionContext);
    const { isInCart, checkedItemToAdd } = useProductCardSelection();
    const isChecked= !!checkedItems[item.id];
    console.log('Render ProductCard', item.id, { isChecked, isInCart });

    return (
        <>
        <div className="col-lg-3 col-md-6 mb-3">
            <div className="card shadow-sm">
              <img src={item.thumbnail} className="card-img-top object-fit-contain img-fluid"/>
              <div className="card-body">
                <h5 className="card-title text-truncate">{item.title}</h5>
                <p className="card-text text-price">قیمت: {item.price}$</p>
                <div className="row">
                <input type="checkbox" className="btn-check" id={`btn-check-${item.id}`} autoComplete="off"
                  checked={isChecked || false} onChange={()=> checkedItemToAdd(item.id)}/>
                <label className={`btn btn-custom btn-sm col-7 shadow-sm d-flex justify-content-center
                 align-items-center ${isInCart.has(item.id) ? "disabled" : ""}`}
                 htmlFor={`btn-check-${item.id}`}>
                    {isInCart.has(item.id) ? (
                        <>
                            <FontAwesomeIcon icon="fa-solid fa-check" className="fs-6" />
                            <span>افزوده شد</span>
                        </>
                        ) : isChecked ? (
                        <>
                            <FontAwesomeIcon icon="fa-solid fa-cart-arrow-down" className="fs-6" />
                            <span>در حال افزودن...</span>
                        </>
                        ) : (
                        <>
                            <FontAwesomeIcon icon="fa-solid fa-cart-plus" className="fs-6" />
                            <span>افزودن به سبد</span>
                        </>
                        )
                    }
                 </label>
                <Link to={"/products/" + item.id} target="_blank"
                 className="btn border-0 btn-more btn-sm col-5">جزئیات بیشتر
                    <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                </Link>
                </div>
              </div>
            </div>
        </div>
        </>
    )
}
export default React.memo(ProductCart);
