import React from 'react';

const Search = () => {
    return (
        <div className=' p-4'>
            <form action="/search" method="get" class="flex">
                <input type="text" name="query" placeholder="Enter your search term..." class="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1" />
                <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Search</button>
            </form>

        </div>
    );
};

export default Search;