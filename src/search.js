import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const Search = () => {
    const { query, searchPost} = useGlobalContext() ;
    return (
        <>
            <h1>NEWS PORTAL</h1>
            <div>
            <form onSubmit={(e) => e.preventDefault() }>
                <div>
                    <input type="text" placeholder="search here" value={query} onChange={(e) => searchPost(e.target.value) } />
                </div>
            </form>

             <button className="category-button"> <Link to={'/category'}>Get News By Category</Link></button>
            </div>
        </>
    ) ;
 };

export default Search;