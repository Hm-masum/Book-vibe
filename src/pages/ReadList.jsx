import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../Utils";
import DisplayReadList from "../components/DisplayReadList";

const ReadList = () => {

    const allBooks=useLoaderData()
    
    const[readList,setReadList]=useState([])

    useEffect(()=>{
        const storedReadList=getReadBooks();
        const storedReadIds=[];

        for(let book=0 ; book<storedReadList.length;book++){
            storedReadIds.push(storedReadList[book].bookId)
        }

        if(storedReadIds.length>0){
            const books=allBooks.filter(book => storedReadIds.includes(book.bookId))

            setReadList(books);
            console.log(books)
        }
    },[])

    return (
        <div className="space-y-3">
            {
                readList.map(book => <DisplayReadList key={book.bookId} book={book}></DisplayReadList>)
            }
        </div>
    );
};

export default ReadList;