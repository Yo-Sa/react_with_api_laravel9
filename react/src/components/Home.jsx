import { Link } from "react-router-dom";
// import { useGetAll } from "../hooks/useGetAll";

// import Form from "./Form";

export const Home = () => {
    // const { posts } = useGetAll();

    // const listPosts = posts.map((post, index) => {
    //     return (
    //     <div key={index}>
    //         <Link to={`/posts/${post.id}`}>{post.title}</Link>
    //     </div>
    //     );
    // });

    return (
        <div>
        <header>
            <div>
            <h1 className="title">Home</h1>
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
            {/* {listPosts} */}
        </div>

        {/* <Form /> */}
        </div>
    );
};
