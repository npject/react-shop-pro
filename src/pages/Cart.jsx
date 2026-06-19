import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productsContext } from "context";
import imgEmpty from 'assets/img/svg/undraw_empty_4zx0.svg';

function Cart() {
    const { changeCount } = useContext(productsContext);
    const [itemsCart, setItemsCart] = useState([]);
    useEffect(()=>{
        setItemsCart(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
        changeCount(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).length : 0);
    },[])
    const removeItem = (itemId)=> {
        let filterItems = itemsCart.filter(product=> product.id != itemId);
        setItemsCart(filterItems);
        localStorage.setItem('cartItems',JSON.stringify(filterItems));
        changeCount(filterItems.length);
    }

    return(
        <>
        <section id="cart">
        <div className="container my-5">
            <div className="row">
                {itemsCart.length ? itemsCart.map(item=>
                    <div className="col-lg-3 mb-3" key={item.id}>
                        <div className="card shadow-sm">
                          <img src={item.images} className="card-img-top object-fit-contain img-fluid"/>
                          <div className="card-body">
                            <h5 className="card-title text-truncate">{item.title}</h5>
                            <p className="card-text text-price">قیمت: {item.price}$</p>
                            <div className="row">
                            <div className="btn-group btn-group-sm col-5">
                                <button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                                <button type="button" className="btn btn-outline-secondary">{item.quantity}</button>
                                <button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                            </div>
                            <div className="col-2 d-flex align-items-center">
                              <FontAwesomeIcon onClick={()=> removeItem(item.id)}
                               icon="fa-regular fa-trash-can" className="fs-5" />
                            </div>
                            <Link to={"/products/" + item.id} target="_blank"
                             className="btn border-0 btn-more btn-sm col-5">جزئیات بیشتر
                                <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                            </Link>
                            </div>
                          </div>
                        </div>
                    </div>
                ) : (<> 
                        <h3 className='mb-5' >سبد خرید شما خالی است!</h3>
                        <div className='row'>
                        <img src={imgEmpty} className='mx-auto' style={{width:'500px'}}/>
                        </div>
                    </>
                )}
            </div>
        </div>
        </section>
        </>
    );
}
export default Cart;
