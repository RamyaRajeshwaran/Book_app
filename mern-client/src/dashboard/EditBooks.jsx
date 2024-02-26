import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';

const EditBooks = () => {
    const { id } = useParams();
    const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ];

    const [selectedBookCategories, setSelectedBookCategories] = useState(category);

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategories(event.target.value);
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;

        const updatedBook = {
            bookTitle: form.bookTitle.value,
            authorName: form.authorName.value,
            imageURL: form.imageURL.value,
            category: form.categoryName.value,
            bookDescription: form.bookDescription.value,
            bookPDFURL: form.bookPDFURL.value
        };

        fetch(`book-app-wheat-delta.vercel.app/book/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedBook)
        })
        .then(res => res.json())
        .then(data => {
            alert("Book is updated successfully!!!");
        });
    };

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl fond-bold'>Update the book data</h2>

            <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="BookTitle" />
                        </div>
                        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" required defaultValue={bookTitle} />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="AuthorName" />
                        </div>
                        <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required defaultValue={authorName} />
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book image URL" required defaultValue={imageURL} />
                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>  
                        <Select
                            id='inputState'
                            name='categoryName'
                            className='w-full rounded'
                            value={selectedBookCategories}
                            onChange={handleChangeSelectedValue}
                        >
                            {bookCategories.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </Select>   
                    </div>
                </div>
                
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your book description..." className='w-full' required rows={5} defaultValue={bookDescription} />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="book PDF URL" required defaultValue={bookPDFURL} />
                </div>

                <Button type="submit" className='mt-5'>Update Book</Button>
            </form>
        </div>
    );
};

export default EditBooks;
