import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const SingleBooks = ({book}) => {
    const {image,bookName,author,category,rating,tags,bookId}=book
    return (
        <Link to={`/book/${bookId}`} className="p-4 rounded-xl border-2 border-gray-100 space-y-3">
            <div className="flex justify-center items-center bg-gray-100 rounded-2xl p-4">
                <img src={image} className="w-[200px] h-[250px]" alt="" />
            </div>
            <div className="space-y-3">
                <div className="flex gap-2">
                    {
                        tags.map(tag => <p className="p-2 rounded-2xl bg-green-50 text-green-400" key={tag}>{tag}</p>)
                    }
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold">{bookName}</h2>
                <p>By : {author}</p>
                <p className="border-t-2 border-dashed border-gray-300"></p>
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex gap-2">{rating}<FaRegStar className="text-xl" /></p>
                </div>
            </div>
        </Link>
    );
};

export default SingleBooks;