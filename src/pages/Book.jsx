import { useLoaderData, useParams } from "react-router-dom";
import { saveReadBooks, saveWishListBooks } from "../Utils";

const Book = () => {

    const books=useLoaderData();
    const {bookId}= useParams();
    const idInt=parseInt(bookId)
    const book =books.find(book=>book.bookId===idInt)

    const handleReadButton = (book) => {
        saveReadBooks(book);
    }

    const handleWishListButton = (book) => {
        saveWishListBooks(book)
    }



    return (
        <div className="lg:flex justify-center items-center gap-8 my-4 lg:my-10">
            <div className=":flex justify-center items-center bg-gray-100 rounded-2xl lg:p-16">
                <img className="rounded-2xl" src={book.image} alt="" />
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl lg:text-4xl font-semibold">{book.bookName}</h1>
                <p className="text-xl">By : {book.author}</p>
                <p className="border-t-2 border-gray-300"></p>
                <p className="text-xl">{book.category}</p>
                <p className="border-t-2 border-gray-300"></p>
                <p><span className="font-semibold">Review : </span>{book.review}</p>
                <div className="flex gap-2 items-center"> <span className="font-semibold">tag :</span>
                    {
                        book.tags.map(tag => <p className="p-2 rounded-2xl bg-green-50 text-green-400" key={tag}>#{tag}</p>)
                    }
                </div>
                <p className="border-t-2 border-gray-300"></p>
                <div className="space-y-2">
                    <p className="flex items-center"><span className="w-[30%]">Number of Pages: </span><span className="font-semibold">{book.totalPages}</span></p>
                    <p className="flex items-center"><span className="w-[30%]">Publisher: </span><span className="font-semibold">{book.publisher}</span></p>
                    <p className="flex items-center"><span className="w-[30%]">Year of Publishing: </span><span className="font-semibold">{book.yearOfPublishing}</span></p>
                    <p className="flex items-center"><span className="w-[30%]">Rating: </span><span className="font-semibold">{book.rating}</span></p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => handleReadButton(book)} className="btn">Read</button>
                    <button onClick={() => handleWishListButton(book)} className="btn bg-cyan-400 text-white">Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default Book;