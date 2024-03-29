import { Link } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";


const DisplayWishList = ({book}) => {
    const {image,bookName,author,category,yearOfPublishing,publisher,totalPages,rating,tags,bookId}=book

    return (
        <div className="lg:flex items-center gap-5 border-2 p-4 rounded-3xl">
            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-2xl">
                <img src={image} className="w-[170px] max-h-[200px] rounded-2xl" alt="" />
            </div>
            <div className="space-y-2 my-3">
                <h3 className="text-xl font-semibold">{bookName}</h3>
                <p>By : {author}</p>
                <div className="lg:flex gap-2 lg:gap-4 items-center"> 
                    <div className="flex gap-2 items-center">
                      <span className="font-semibold">tag :</span>
                        {
                            tags.map(tag => <p className="p-2 rounded-xl bg-green-50 text-green-400" key={tag}>#{tag}</p>)
                        }
                    </div>
                    <p className="flex items-center gap-1"><HiOutlineLocationMarker />Year of publishing : {yearOfPublishing}</p>
                </div>
                <div className="lg:flex lg:gap-5">
                    <p className="flex items-center gap-1"><BsPeople /> Publisher : {publisher}</p>
                    <p className="flex items-center gap-1"><RiPagesLine />page : {totalPages}</p>
                </div>
                <p className="border-t-2 border-dotted border-gray-300"></p>
                <div className="flex gap-2 lg:gap-5 lg:items-center items-start">
                    <p className="px-3 py-2 bg-blue-200 rounded-2xl text-blue-500">{category}</p>
                    <p className="px-3 py-2 bg-orange-200 rounded-2xl text-orange-500">rating:{rating}</p>
                    <Link to={`/book/${bookId}`} className="px-3 py-2 bg-green-500 rounded-2xl text-white">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayWishList;