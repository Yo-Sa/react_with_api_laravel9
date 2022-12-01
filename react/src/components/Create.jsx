import axios from "axios";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Header } from "./Header";


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
            <Header />
            <h1>New Post</h1>
            {/* API連携の記述 */}
            <form onSubmit={handleSubmit} className="create-form">
                <div>
                    <input
                    type="text"
                    placeholder="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                
                
                <input
                    className="form-input"
                    type="body"
                    placeholder="body"
                    name="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    
                />
                <div className="form-btn">
                    <button type="submit">Submit</button>
                </div>
                
            </form>

        </div>
    )
}