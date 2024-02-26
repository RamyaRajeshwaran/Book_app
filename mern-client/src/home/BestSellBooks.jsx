import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () =>{
      fetch("book-app-wheat-delta.vercel.app/all-books").then (res => res.json()).then(data => setBooks(data.slice(0,5)))
    }, [])
  return (
    <div >
      <BookCards  books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks;
