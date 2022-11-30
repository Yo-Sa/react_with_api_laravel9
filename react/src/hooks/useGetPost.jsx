import { useState, useEffect } from "react";
import axios from "axios";

export const useGetPost = (id = "") => {
    const [post, setPosts] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/posts/${id}`)
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    console.log(post);
    return { post };
};