export async function loader({params}) {
    const idProduct = await params.id;
    const data = await fetch(`https://api.escuelajs.co/api/v1/products/${idProduct}`);
    const response =await data.json();

    return {response}
}
