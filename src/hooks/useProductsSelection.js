import { useContext, useMemo, useCallback } from "react";
import { SelectionContext } from "context";

export function useProductsSelection () {
    const { checkedItems, setCheckedItems, cartItemIds } = useContext(SelectionContext);

    const checkedItemsCount = useMemo(
        () => Object.values(checkedItems).filter(Boolean).length,
        [checkedItems]
    );

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

    return { checkedItemsCount, isInCart, checkedItemToAdd };
}
