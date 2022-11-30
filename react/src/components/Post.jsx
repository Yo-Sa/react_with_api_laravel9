import { Link, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost.jsx";

export const Post = () => {
    const { id } = useParams();

    const { post } = useGetPost(id);

    return (
        <div>
        <header>
            <div>
            <h1 className="title">Post</h1>
            </div>
            <nav className="nav">
            <Link to="/" className="home">
                home
            </Link>
            <Link to="/create" className="create">
                create
            </Link>
            </nav>
        </header>
        <div className="list">
            <h2>PostList</h2>
            {/* <p>ID:{id}</p> */}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.created_at}</p>
        </div>
        </div>
    );
};