import { Link } from "react-router-dom";
import { useGetAll } from "../hooks/useGetAll";
import React, { useState } from "react";
import { Header } from "./Header";

export const Home = () => {
    const { posts } = useGetAll();

    const listPosts = posts.map((post, index) => {
        return (
        <div key={index}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
        );
    });

    return (
        <div>
            <Header />
            
            <div className="list">
                <h2>PostList</h2>
                {listPosts}
            </div>
        </div>
    );
};
