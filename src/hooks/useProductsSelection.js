import { useContext, useMemo } from "react";
import { SelectionContext } from "context";

export function useProductsSelection () {
    const { checkedItems } = useContext(SelectionContext);

    const checkedItemsCount = useMemo(
        () => Object.values(checkedItems).filter(Boolean).length,
        [checkedItems]
    );

    return { checkedItemsCount };
}
