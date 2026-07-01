import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext, SelectionContext } from "context";
import { Loading, SkeletonProduct } from "components/ui";
import ProductCart from "components/products/ProductCart";
import CartShoppingSvg from "assets/img/svg/undraw_empty-cart_574u.svg?react";
import { useProductsFilters, useProductsSelection, useCart } from "hooks";
import { fetchProducts, fetchMultipleProduct, fetchCategoryList } from "services";
import ProductFilters from "components/products/productFilters";


function Products() {
    const { color } = useContext(themeContext);
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const { state: filtersState, setFilter, setPage } = useProductsFilters();
    const [hasMore,setHasMore] = useState(true);
    const limit = 20;
    const [totalPages, setTotalPages] = useState(1);

    const { checkedItems, setCheckedItems } = useContext(SelectionContext);
    const { checkedItemsCount } = useProductsSelection();
    const { addCheckedItemsToCart } = useCart() ;

    const getData = async ()=>{
        try {
            setLoading(true);
            const { res } = await fetchProducts(filtersState);
            setData(res.products);
            ((res.total / limit) >= 1) ? setTotalPages(res.total / limit) : setTotalPages(1);    
            setHasMore(res.length === limit);
        } catch (error) {
            console.error("Error fetching data::::", error);
        } finally {
            setLoading(false);
        }
    };
    const getCategoryList = async () => {
        try {
            const { categoryList } = await fetchCategoryList();
            setCategoryList(categoryList);
        } catch (error) {
            console.log("Error fetching category list::::", error);
        }
    }
    const handleAddItems = async () => { 
        const idItemsToFetch = Object.keys(checkedItems).filter(key => checkedItems[key] === true);
        const { products } = await fetchMultipleProduct(idItemsToFetch);
        addCheckedItemsToCart(products);
        setCheckedItems({});
    }
    useEffect(()=>{
        getData();
        getCategoryList();
    },[filtersState]);
    //console.log(checkedItems)
    console.log('products::::', checkedItemsCount);

    return(
        <>
        <section id="products" data-bs-theme={color}>
        <div className="container">
            <ProductFilters 
                filters={filtersState}
                setFilter={setFilter}
                categoryList={categoryList}
                onSearch={getData}
            />
            {loading && (<Loading />)}
            <div className="row">
                {loading && Array.from({length: limit}).map((_, index) => 
                        <SkeletonProduct key={index} />         
                )}
                {!loading && data.map(item=> (
                 <ProductCart 
                    key={item.id}
                    item={item}
                    //isChecked={!!checkedItems[item.id]}
                    //isInCart={isInCart}
                    //checkedItemToAdd={checkedItemToAdd}
                 />   
                ))}
            </div>
            <div className="row my-3">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center pe-0">
                    <li className="page-item">
                      <button onClick={() => { setPage(prev => Math.max(prev - 1, 1)) }} disabled={ filtersState.page === 1}
                       className={`page-link rounded-start-0 rounded-end-2 ${ filtersState.page === 1 ? 'disabled' : ''}`} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </button>
                    </li>
                    {Array.from({length: totalPages}, (_,index) => index + 1).map(number => 
                        <li key={number} className={`page-item ${ filtersState.page === number ? 'active' : ''}`}>
                            <button onClick={() => { setPage(number) }} className="page-link">{number}</button>
                        </li>         
                    )}
                    <li className="page-item">
                      <button onClick={() => { setPage(prev => prev + 1); console.log(data) }} disabled={!hasMore}
                       className="page-link rounded-end-0 rounded-start-2" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </button>
                    </li>
                  </ul>
                </nav>
            </div>
        </div>
        <div id='cartShoppingIcon' className={`d-flex justify-content-center align-items-center
            ${checkedItemsCount > 0 ? 'visible' : 'hidden'}`}>
            <div className="position-relative" onClick={ handleAddItems }>
                <CartShoppingSvg id="cartShoppingSvg"/>
                <svg className="tick-icon" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" stroke="#00afb9" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="badge rounded-circle fw-normal">{checkedItemsCount > 0 ? checkedItemsCount : ''}</span>
            </div>
            <FontAwesomeIcon icon="fa-regular fa-circle-xmark" className="position-absolute top-0 end-0"
            onClick={() => { setCheckedItems({}) }} />   
        </div>
        </section>
        </>
    );
}
export default Products;
