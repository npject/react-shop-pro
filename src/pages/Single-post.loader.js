export async function loader({params}) {
    const idPost = await params.idPost;
    // const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    // const response = await data.json();

    const fetches = [
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`)
    ];
    const data = await Promise.all(fetches);
    const response = await Promise.all(data.map(res => res.json()));

    return {response}
}
