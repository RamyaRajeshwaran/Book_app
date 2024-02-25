import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea, Select } from 'flowbite-react';

const UploadBook = () => {
    const bookCategories = [
        "Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction",
        "Fantasy", "Horror", "Bibliography", "Autobiography", "History",
        "Self-help", "Memoir", "Business", "Children Books", "Travel", "Religion",
        "Art and Design"
    ];

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
    }

    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = selectedBookCategory;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const bookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        };

        fetch("http://localhost:5000/upload-book", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bookObj)
        }).then(res => res.json()).then(data => {
            alert("Book uploaded successfully!!!");
            form.reset();
        });
    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload A book</h2>
            <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="bookTitle" value="BookTitle" />
                        </div>
                        <TextInput id="bookTitle" type="text" name='BookTitle' placeholder="Book Name" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="authorName" value="AuthorName" />
                        </div>
                        <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required />
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageURL" value="Book Image URL" />
                        </div>
                        <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book image URL" required />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Book Category" />
                        </div>
                        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                            {bookCategories.map((option) => <option key={option} value={option}>{option}</option>)}
                        </Select>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookDescription" value="Book Description" />
                    </div>
                    <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your book description..." className='w-full' required rows={5} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="bookPDFURL" value="Book PDF URL" />
                    </div>
                    <TextInput id="bookPDFURL" type="text" name='bookPDFURL' placeholder="book PDF URL" required />
                </div>
                <Button type="submit" className='mt-5'>Upload Book</Button>
            </form>
        </div>
    );
}

export default UploadBook;
