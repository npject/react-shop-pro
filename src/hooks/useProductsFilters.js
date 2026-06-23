import { useReducer } from "react";
import { ACTION_TYPES } from "constants";

const filtersReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_FILTER:
            return { ...state, [action.field]: action.value, page: 1 };    
            
        case ACTION_TYPES.SET_PAGE:
            return { ...state, page: action.value };

        default:
            return state;
    }
}
export function useProductsFilters() {
    const [state, dispatch] = useReducer(filtersReducer, {
        page: 1,
        minPrice: 1,
        maxPrice: 1000,
        categoryId: 0,
        titleProduct: "",
    });

    return { state, dispatch };
}
