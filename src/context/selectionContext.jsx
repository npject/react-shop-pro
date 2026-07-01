import { createContext, useState } from "react";
import { getCartItems } from "utils";

export const SelectionContext = createContext();

export function SelectionProvider ({children}) {
    const [checkedItems, setCheckedItems] = useState({});

    const [cartItemIds, setCartItemIds] = useState(() => 
        getCartItems().map(p => p.id)
    );

    // const [prevProducts,setPrevProducts] = useState(() => getCartItems());
    // console.log('prev products in context::', prevProducts)
    // console.log('selection context::::', getCartItems(), cartItemIds);

    return (
        <SelectionContext.Provider value={{ 
            checkedItems, 
            setCheckedItems, 
            cartItemIds, 
            setCartItemIds, 
            //prevProducts,
            //setPrevProducts 
        }} >
            {children}
        </SelectionContext.Provider>
    );
}
