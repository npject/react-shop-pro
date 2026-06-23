const BASE_URL = "https://api.escuelajs.co/api/v1/products";
const limit = 20;

export const fetchProducts = async (state) => {
    try {
        const offset = (state.page - 1) * limit;
        const url = `${BASE_URL}?title=${state.titleProduct}&price_min=${state.minPrice}&price_max=${state.maxPrice}&categoryId=${state.categoryId}&offset=${offset}&limit=${limit}`;
        const fetchData = await fetch(url)
        const res = await fetchData.json();
        return { res };
    } catch (error) {
        console.error("Error fetching data::::", error);
    }
}

export const fetchProductById = async (id) => {

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
