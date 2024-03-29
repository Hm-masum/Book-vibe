import { useEffect } from "react";
import { useState } from "react";
import SingleBooks from "./SingleBooks";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="my-3 lg:my-10">
      <h2 className="text-center font-semibold text-3xl lg:text-5xl my-5">Books</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {  
          books.map((book) => (
            <SingleBooks key={book.id} book={book}></SingleBooks>
          ))
        }
      </div>
    </div>
  );
};

export default Books;
