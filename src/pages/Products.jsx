import { useEffect, useState, useContext, useMemo } from "react";
import Loading from "../components/ui/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartShoppingSvg from "/src/assets/img/svg/undraw_empty-cart_574u.svg?react";
import { productsContext } from "/src/context/ProductsContext";
import ProductCart from "/src/components/products/ProductCart";

function Products() {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const { changeCount } = useContext(productsContext);
    const [checkedItems,setCheckedItems] = useState({});
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const prevProducts = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isInCart = useMemo(
        () => new Set(prevProducts.map(p => p.id)), 
        [prevProducts]
    );
    const getData = async ()=>{
        setLoading(true);
        const fetchData = await fetch('https://api.escuelajs.co/api/v1/products');
        const res = await fetchData.json();
        setData(res);
        setLoading(false);
    };
    const checkedItemToAdd = (itemId)=> {
        setCheckedItems((items)=>({
            ...items,
            [itemId]: !items[itemId]
        }));
    }
    const addCheckedItemsToCart = async ()=> {
        const idItemsToFetch = Object.keys(checkedItems).filter(key => checkedItems[key] === true);
        const fetches = idItemsToFetch.map(id => fetch(`https://api.escuelajs.co/api/v1/products/${id}`));
        const responses = await Promise.all(fetches);
        const products = await Promise.all(responses.map(response => response.json()));        
        const finalProducts = [
            ...prevProducts, 
            ...products.map(product => ({...product,quantity:1}))
        ];
        localStorage.setItem('cartItems',JSON.stringify(finalProducts));   
        changeCount(finalProducts.length);
        setCheckedItems({});
    }
    useEffect(()=>{
        getData();
    },[]);
    console.log(checkedItems)
    

    return(
        <>
        <h1>products</h1>
        {loading && (<Loading />)}
        <section id="products">
        <div className="container">
            <div className="row">
                {!loading && data.map(item=> (
                 <ProductCart 
                    key={item.id}
                    item={item}
                    checkedItems={checkedItems}
                    isInCart={isInCart}
                    checkedItemToAdd={checkedItemToAdd}
                 />   
                ))}
            </div>
        </div>
        <div id='cartShoppingIcon' className={`d-flex justify-content-center align-items-center
            ${checkedCount > 0 ? 'visible' : 'hidden'}`}>
            <div className="position-relative" onClick={addCheckedItemsToCart}>
                <CartShoppingSvg id="cartShoppingSvg"/>
                <svg class="tick-icon" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke="#00afb9" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="badge rounded-circle fw-normal">{checkedCount > 0 ? checkedCount : ''}</span>
            </div>
            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="position-absolute top-0 end-0"
             onClick={() => setCheckedItems({})} />   
        </div>
        </section>
        </>
    );
}
export default Products;
