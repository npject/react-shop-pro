import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeContext, SelectionContext } from "context";
import { Loading, SkeletonProduct } from "components/ui";
import ProductCart from "components/products/ProductCart";
import CartShoppingSvg from "assets/img/svg/undraw_empty-cart_574u.svg?react";
import { useProductsFilters, useProductsSelection, useCart } from "hooks";
import { fetchProducts, fetchMultipleProduct, fetchCategoryList } from "services";


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
            <div className="row my-3">
                <div className="col-lg-3 d-flex align-items-center mb-3">
                    <div className="input-group flex-row-reverse">
                        <input onChange={(ev) => { setFilter('searchProduct', ev.target.value.trim()) }} value={filtersState.searchProduct ? filtersState.searchProduct : ''}
                         className="form-control fs-14" type="search" placeholder="جستجو..." aria-label="Search"/>
                        <button onClick={() => { getData() }} className="btn fs-14 d-flex justify-content-center align-items-center" type="button">
                            <FontAwesomeIcon icon="fa-solid fa-search" />
                        </button>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center mb-3">
                    <div className="input-group flex-row-reverse">
                      <select value={filtersState.category} onChange={(ev) => { setFilter('category', ev.target.value) }}
                       className="form-select fs-14" id="inputGroupSelect02">
                        <option value="">همه محصولات</option>
                        {categoryList.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                      </select>
                      <label className="input-group-text fs-14" htmlFor="inputGroupSelect02">
                        <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                      </label>
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center mb-3">
                    <div className="input-group flex-row-reverse">
                      <select onChange={(ev) => { setFilter('sortBy', ev.target.value) }}
                       className="form-select fs-14" id="inputGroupSelect02">
                        <option className="fs-14" value="">...</option>
                        <option className="fs-14" value="title">عنوان</option>
                        <option className="fs-14" value="category">دسته بندی</option>
                        <option className="fs-14" value="price">قیمت</option>
                      </select>
                      <select onChange={(ev) => { setFilter('order', ev.target.value) }}
                       className="form-select fs-14" id="inputGroupSelect02">
                        <option className="fs-14" value="asc">صعودی</option>
                        <option className="fs-14" value="desc">نزولی</option>
                      </select>
                      <label className="input-group-text fs-14" htmlFor="inputGroupSelect02">
                        <FontAwesomeIcon icon="fa-solid fa-sort" />
                      </label>
                    </div>
                </div>    
                {/* <div className="col-lg-3">
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="range-price-min" className="form-label fs-14 color-main">حداقل قیمت:</label>
                            <input onChange={(ev) => { setFilter('minPrice', Number(ev.target.value)) }}
                             type="range" className="form-range" min="0" max="999" value={filtersState.minPrice} id="range-price-min"/>
                            <output className="text-price" htmlFor="range-price-min" id="range-val-price-min" aria-hidden="true">{filtersState.minPrice}$</output>
                        </div>
                        <div className="col-6">
                            <label htmlFor="range-price-max" className="form-label fs-14 color-main">حداکثر قیمت:</label>
                            <input onChange={(ev) => { setFilter('maxPrice', Number(ev.target.value)) }}
                             type="range" className="form-range" min="1" max="1000" value={filtersState.maxPrice} id="range-price-max"/>
                            <output className="text-price" htmlFor="range-price-max" id="range-val-price-max" aria-hidden="true">{filtersState.maxPrice}$</output>
                        </div>
                    </div>
                </div> */}
            </div>
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
