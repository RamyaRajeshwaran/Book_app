import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBook = () => {
    const { id } = useParams(); // Assuming you have a route parameter named "id"
    // Fetch book data based on the id parameter

    return (
        <div className='mt-28 px-4 lg:px-24'>
            {/* Render book details here */}
        </div>
    );
}

export default SingleBook;
