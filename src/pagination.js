import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
    const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext() ;
    const handlePrevPage = () => {
        if (page > 0) {
            getPrevPage();
        }
    };
    return (
        <>

            <div className="pagination-btn">
                <button onClick={handlePrevPage} disabled={page === 0}>
                    PREV
                </button>
                <p>
                    {page + 1} of {nbPages}
                </p>
                <button onClick={() => getNextPage()} disabled={page + 1 >= nbPages}>
                    NEXT
                </button>
            </div>
        </>
    ) ;
};
export default Pagination;