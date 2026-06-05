import { createContext, useReducer } from "react";

export const productsContext = createContext();
const productsReducer = (state,action)=> {
    switch (action.type) {
        case 'CHANGE_COUNT':
            return {...state,count:action.payload}
            break;
    
        default:
            break;
    }
}
export function ProductsProvider ({children}) {
    const countProducts = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')).length : 0 ; 
    const [state,dispatch] = useReducer(productsReducer,{
        count: countProducts
    });
    const changeCount = (count)=> {
        dispatch({type:'CHANGE_COUNT',payload:count});
    };

    return (
        <productsContext.Provider value={{...state,changeCount}}>
            {children}
        </productsContext.Provider>
    )
}
