import React, { useState } from 'react';

function ArticleList({ fetchData }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleCategoryChange = (event) => {
        const selected = event.target.value;
        setSelectedCategory(selected);
        fetchData(selected);
    };

    return (
        <div className='select'>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                <option value="all">All</option>
                <option value="sports">Sports</option>
                <option value="health AND medical">Health</option>
                <option value="general">General</option>
                <option value="science">Science</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>
    );
}

export default ArticleList;

