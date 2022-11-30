import axios from "axios";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


export const Create = () => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [isPost, setIsPost] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
        .post(
        "http://localhost:8000/api/posts",
        { title,body }
        )
        .then((res) => {
        console.log(res);
        setIsPost(true);
        setTitle("");
        setBody("");

        })
        .catch((err) => {
        console.log(err);
        });
    };
    console.log(isPost);

    return (
        <div>
            <header>
                <nav className='nav'>
                    <Link to="/" className='home'>home</Link>
                    <Link to="/create" className='create'>create</Link>
                </nav>
            </header>
            <h1>CreatePost</h1>
            {/* API連携の記述 */}
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <input
                type="body"
                placeholder="body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}