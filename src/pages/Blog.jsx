import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";

function Blog() {
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const getPosts = async () => {
        setLoading(true);
        const fetchPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
        const res = await fetchPosts.json();
        setPosts(res);
        setLoading(false);
    }

    useEffect(() => {
        getPosts();
    },[])

    return(
        <>
        <h1>blog</h1>
        <section id="blog">
            <div className="container">
                <div className="row">
                    {loading && <Loading />}
                    {!loading && posts.map((post) => 
                        <div className="col-lg-4 col-md-6 mb-3 post" key={post.id}>
                            <div className="card">
                                <Link to={`/blog/${post.id}`} target="_blank">
                                    <img src={`https://picsum.photos/seed/${post.id}/600/400`} className="card-img-top" alt="..."/>
                                </Link>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text fs-14">{post.body}</p>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        </>
    );
}
export default Blog;
