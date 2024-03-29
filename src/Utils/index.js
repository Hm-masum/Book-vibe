import toast from "react-hot-toast";
export const getReadBooks = () => {
    let books =[];
    const storedBooks=localStorage.getItem('readBooks')
    if(storedBooks){
        books= JSON.parse(storedBooks)
    }
    return books;
}

export const getWishList = () => {
    let books =[];
    const storedBooks=localStorage.getItem('wishListBooks')
    if(storedBooks){
        books= JSON.parse(storedBooks)
    }
    return books;
}

// Save
export const saveReadBooks = book => {
    let books = getReadBooks();
    const isExist =books.find (b => b.bookId === book.bookId);
    if(isExist){
        return toast.error('Book Already read')
    }
    books.push(book);
    localStorage.setItem('readBooks', JSON.stringify(books));
    toast.success('Book added Read list')
}

export const saveWishListBooks = book => {
    let books = getWishList();
    const isExist =books.find (b => b.bookId === book.bookId);
    
    let readBooks=getReadBooks();
    const isRead = readBooks.find(b => b.bookId === book.bookId)

    if(isExist){
        return toast.error('Book Already wishlist')
    }

    if(isRead){
        return toast.error('Book Already Read list')
    }

    books.push(book);
    localStorage.setItem('wishListBooks', JSON.stringify(books));
    toast.success('Book added wish list')
}


