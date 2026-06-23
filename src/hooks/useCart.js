import { useCallback, useContext } from "react";
import { getCartItems, setCartItems } from "utils";
import { productsContext, SelectionContext } from "context";


export const useCart = ( ()=> {
    //const [prevProducts,setPrevProducts] = useState(getCartItems);
    //const [prevProducts,setPrevProducts] = useState(() => getCartItems());
    const { changeCount } = useContext(productsContext);
    const { setCartItemIds } = useContext(SelectionContext);

    const addCheckedItemsToCart = useCallback( async (products) => {
        const previousProducts = getCartItems();
        console.log('previous products:::',previousProducts);
        const finalProducts = [
            ...previousProducts, 
            ...products.map(product => ({...product,quantity:1}))
        ];
        console.log('final Products:::',finalProducts);
        setCartItems(finalProducts);
        // getCartItems().map(p => p.id)
        setCartItemIds(() =>
            finalProducts.map(p => p.id)
        );
        changeCount(finalProducts.length);
        //setPrevProducts(finalProducts);
        console.log('previous products after update:::',previousProducts);


    }, []);     //checkedItems, prevProducts, changeCount
    
    //setCheckedItems({});

    return { addCheckedItemsToCart }
});
