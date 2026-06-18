import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/themeContext";
import { productsContext } from "../context/ProductsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SingleProduct() {
    const {response} = useLoaderData();
    console.log(response);
    const { changeCount } = useContext(productsContext);
    const { color } = useContext(themeContext);
    const colorParagraph = `${color == 'light' ? 'text-body-tertiary' : 'text-white-50' }`;
    const [cartItems,setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    const [mainImage,setMainImage] = useState(response.images[0]);

    const addToCart = (item)=> {
        const isProductsInCart = cartItems.find((cartItem) => cartItem.id == item.id);
        if(isProductsInCart){
            setCartItems(
                cartItems.map((cartItem) => 
                    cartItem.id == item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem 
                )
            )
        }else{
            setCartItems([...cartItems, {...item, quantity: 1}]);
        }
    }

    useEffect(()=>{
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
        changeCount(cartItems.length);        
    },[cartItems]);

    return(
        <>
        <h1>single</h1>
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="card border-0">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex align-items-center h-100">
                                        <div className="card-body">
                                          <h1 className="card-title">{response.title}</h1>
                                          <p className="card-text text-price fs-3"><span className="fs-6">قیمت:</span> {response.price}$</p>
                                          <p className={`card-text ${colorParagraph}`}><span className="fs-6">توضیحات:</span> {response.description}</p>
                                          <div className="row">
                                          <button href="#" className="btn btn-custom col-12"
                                           onClick={() => addToCart(response)}>افزودن به سبد خرید 
                                            <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                                           </button>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <img src={mainImage} className="product-main-img object-fit-contain img-fluid rounded-start-5 rounded-bottom-5"/>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center mt-1">
                                            {response.images.map((image,index,arr) => 
                                                <img
                                                 key={index}
                                                 src={image}
                                                 onClick={() => {setMainImage(image)}}
                                                 className={`product-thumbs object-fit-contain img-fluid ms-1
                                                    ${mainImage === image ? 'mt-0' : 'mt-1'}
                                                  ${
                                                    index === 0 && index !== arr.length -1 ? 'rounded-end-5 rounded-bottom-5' : 
                                                    index === arr.length -1 && index !== 0  ? 'rounded-start-5 rounded-bottom-5' : 
                                                    'rounded-bottom-5'
                                                 }`}/>
                                            )}
                                        </div>
                                    </div>
                                </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default SingleProduct;
