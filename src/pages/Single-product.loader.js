import { fetchProductById } from "services";

export async function loader({params}) {
    const idProduct = await params.id;
    const { response } =await fetchProductById(idProduct);

    return {response}
}
