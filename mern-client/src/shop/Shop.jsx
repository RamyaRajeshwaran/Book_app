import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';


const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("book-app-wheat-delta.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data));
   }, [])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'> All Books are hear</h2>

      <div className='grid gap-10 lg:grid-cols-3 my-12 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
            
          >
            <img  alt='' src={book.imageURL} className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
