import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import "assets/css/custom-select.css";


function ProductFilters ({ filters, setFilter, setMultipleFilters, categoryList, onSearch }) {
    const categoryOptions = [
        ...categoryList.map(item => ({
            value: item, 
            label: item
        }))
    ];
    const sortOptions = [
        {
            label: "قیمت",
            options: [
                {value: "price-asc", label: "ارزان به گران"},
                {value: "price-desc", label: "گران به ارزان"}
            ]
        },
        {
            label: "عنوان",
            options: [
                {value: "title-asc", label: "A → Z"},
                {value: "title-desc", label: "Z → A"}
            ]
        },
        {
            label: "دسته بندی",
            options: [
                {value: "category-asc", label: "A → Z"},
                {value: "category-desc", label: "Z → A"}
            ]
        },
    ];  
 
    const customStyles = {
      clearIndicator: (base) => ({
        ...base,
        color: "#adb5bd",
        ":hover": { color: "#f07167ff" }, // رنگ قرمز برای کلیر کردن
      }),
    };    
  
    return (
        <>
        <div className="row my-3">
            <div className="col-lg-3 col-md-6 d-flex align-items-center mb-3">
                <div className="input-group flex-row-reverse">
                    <input onChange={(ev) => { setFilter('searchProduct', ev.target.value.trim()) }} value={filters.searchProduct ? filters.searchProduct : ''}
                     className="form-control form-control-lg fs-14" type="search" placeholder="جستجو..." aria-label="Search"/>
                    <button onClick={() => { onSearch() }} className="btn fs-14 d-flex justify-content-center align-items-center" type="button">
                        <FontAwesomeIcon icon="fa-solid fa-search" />
                    </button>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <Select 
                    options={categoryOptions}
                    onChange={(selected) => setFilter('category', selected?.value || '') }
                    value={categoryOptions.find(option =>
                        option.value === filters.category
                    ) || ''}
                    isRtl
                    isClearable
                    isSearchable
                    className="w-100 fs-14 react-select-container"
                    classNamePrefix="react-select"
                    placeholder="دسته بندی..."
                    styles={customStyles}
                /> 
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
                <Select 
                    options={sortOptions}
                    onChange={(option) => {
                        if (!option) {
                            setMultipleFilters({
                                "sortBy": "",
                                "order": ""
                            });
                            return;
                        }
                        const [sortBy, order] = option.value.split('-');
                        setMultipleFilters({
                            "sortBy": sortBy,
                            "order": order
                        });
                    }}
                    value={
                        sortOptions.flatMap(group => group.options).find(option =>
                        option.value === `${filters.sortBy}-${filters.order}`
                        ) || null
                    }
                    isRtl
                    isClearable
                    isSearchable
                    className="w-100 fs-14 react-select-container"
                    classNamePrefix="react-select"
                    placeholder="مرتب سازی..."
                    styles={customStyles}
                />
            </div>
            {/* <div className="col-lg-3">
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="range-price-min" className="form-label fs-14 color-main">حداقل قیمت:</label>
                        <input onChange={(ev) => { setFilter('minPrice', Number(ev.target.value)) }}
                         type="range" className="form-range" min="0" max="999" value={filters.minPrice} id="range-price-min"/>
                        <output className="text-price" htmlFor="range-price-min" id="range-val-price-min" aria-hidden="true">{filters.minPrice}$</output>
                    </div>
                    <div className="col-6">
                        <label htmlFor="range-price-max" className="form-label fs-14 color-main">حداکثر قیمت:</label>
                        <input onChange={(ev) => { setFilter('maxPrice', Number(ev.target.value)) }}
                         type="range" className="form-range" min="1" max="1000" value={filters.maxPrice} id="range-price-max"/>
                        <output className="text-price" htmlFor="range-price-max" id="range-val-price-max" aria-hidden="true">{filters.maxPrice}$</output>
                    </div>
                </div>
            </div> */}
        </div>                
        </>
    );
}
export default ProductFilters;
