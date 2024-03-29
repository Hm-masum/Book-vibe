import { useLoaderData } from "react-router-dom";
import { getWishList } from "../Utils";
import DisplayWishList from "../components/DisplayWishList";
import { useEffect, useState } from "react";

const WishList = () => {
    const allBooks=useLoaderData()
    
    const[wishList,setWishList]=useState([])

    useEffect(()=>{
        const storedWishList=getWishList();
        const storedWishIds=[];

        for(let book=0 ; book<storedWishList.length;book++){
            storedWishIds.push(storedWishList[book].bookId)
        }

        if(storedWishIds.length>0){
            const books=allBooks.filter(book => storedWishIds.includes(book.bookId))

            setWishList(books);
        }
    },[])

    return (
        <div className="space-y-3">
           {
             wishList.map(book =><DisplayWishList key={book.bookId} book={book}></DisplayWishList>)
           }
        </div>
    );
};

export default WishList;