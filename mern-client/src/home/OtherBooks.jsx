import React, { useEffect, useState } from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("book-app-wheat-delta.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)))
    }, [])
  return ( 
    <div>
      <BookCards books={books} headLine="Other Books"/>
    </div>
  )
}

export default OtherBooks
