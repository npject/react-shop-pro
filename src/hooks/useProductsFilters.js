import { useReducer } from "react";
import { ACTION_TYPES } from "constants";

const filtersReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_FILTER:
            return { ...state, [action.field]: action.value, page: 1 };    
            
        case ACTION_TYPES.SET_PAGE:
            return { ...state, page: action.value };

        case ACTION_TYPES.RESET_FILTER:
            return { ...state, [action.field]: "", page: 1 };
        
        default:
            return state;
    }
}
export function useProductsFilters() {
    const [state, dispatch] = useReducer(filtersReducer, {
        page: 1,
        //minPrice: 1,
        //maxPrice: 1000,
        category: "",
        searchProduct: "",
        sortBy: "",
        order: "asc"
    });

    const setFilter = (field, value) => {
        dispatch({ type: ACTION_TYPES.SET_FILTER, field, value });
        if (field === "category"){
            resetFilter("searchProduct");
        }
        if (field === "searchProduct"){
            resetFilter("category");
        }
    };
    const setPage = (value) => {
        dispatch({ type: ACTION_TYPES.SET_PAGE, value });
    };
    const resetFilter = (field) => {
        dispatch({ type: ACTION_TYPES.RESET_FILTER, field });
    }
    
    return { state, setFilter, setPage };
}
