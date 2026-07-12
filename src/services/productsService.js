//  OLD API
//const BASE_URL = "https://api.escuelajs.co/api/v1/products";      
const BASE_URL = "https://dummyjson.com/products";
const limit = 20;

export const fetchProducts = async (state) => {
    try {
        const offset = (state.page - 1) * limit;
        //  OLD API
        //const url = `${BASE_URL}?title=${state.titleProduct}&price_min=${state.minPrice}&price_max=${state.maxPrice}&categoryId=${state.categoryId}&offset=${offset}&limit=${limit}`;
        
        const params = new URLSearchParams({
            q: state.searchProduct,
            limit: limit,
            skip: offset,
            select: 'title,price,thumbnail'
        });

        if (state.sortBy) {
            params.append('sortBy',state.sortBy);
            params.append('order',state.order);
        }

        const url = state.category ?
            `${BASE_URL}/category/${state.category}` :
            `${BASE_URL}/search?${params.toString()}`;

        const fetchData = await fetch(url);
        const res = await fetchData.json();
        return { res };
    } catch (error) {
        console.error("Error fetching data::::", error);
    }
}

export const fetchProductById = async (id) => {
    try {
        const data = await fetch(`${BASE_URL}/${id}`);
        const response =await data.json();
        return { response};
    } catch (error) {
        console.error("Error fetching data::::", error);   
    }
}

export const fetchMultipleProduct = async (ids) => {
    try {
        const fetches = ids.map( id => fetch(`${BASE_URL}/${id}`) );
        const responses = await Promise.all(fetches);
        const products = await Promise.all( responses.map(response => response.json()) );
        return { products };
    } catch (error) {
        console.log("Error fetching multiple products::::", error);
    }
}

export const fetchCategoryList = async () => {
    try {
        const url = `${BASE_URL}/category-list`;
        const data = await fetch(url);
        const categoryList = await data.json();
        return { categoryList };
    } catch (error) {
        console.log("Error fetching category list::::", error);
    }
}

export const fetchTopProducts = async () => {
    try {
        const url = `${BASE_URL}?sortBy=rating&order=desc&select=title,price,rating,category,thumbnail&limit=194`;
        const data = await fetch(url);
        const response = await data.json();
        return { response };
    } catch (error) {
        console.log("Error fetching top products::::", error);
    }
}
