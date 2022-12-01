import { Link, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost.jsx";
import { Header } from "./Header.jsx";

export const Post = () => {
    const { id } = useParams();

    const { post } = useGetPost(id);

    return (
        <div>
            <Header />
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