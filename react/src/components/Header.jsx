import React from 'react'
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <header className="App-header">
                    <div className="title-header">
                        <h1>
                            <Link to="/" className="title">
                                HOME
                            </Link>
                        </h1>
                        
                    </div>
                    <div className="create-link">
                        <Link to="/create" className="create">
                            <button className="btn">
                                create new post
                            </button>
                        </Link>
                    </div>
                    
                        
                </header>
        </div>
    )
}
