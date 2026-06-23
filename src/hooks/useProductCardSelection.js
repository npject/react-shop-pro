import { useContext, useCallback, useMemo } from "react";
import { SelectionContext } from "context";

export function useProductCardSelection () {
    const { setCheckedItems, cartItemIds } = useContext(SelectionContext);

    const isInCart = useMemo(
        () => new Set(cartItemIds), 
        [cartItemIds]
    );
    
    const checkedItemToAdd = useCallback((itemId)=> {
        setCheckedItems((items)=>({
            ...items,
            [itemId]: !items[itemId]
        }));
    },[setCheckedItems]);

    return { isInCart, checkedItemToAdd };
}
