import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1 className="text-center rounded-2xl font-semibold lg:text-4xl p-4 bg-slate-200">
        Books
      </h1>

      <div className="text-center my-5">
           <details className="dropdown">
                <summary className="m-1 btn bg-green-500">Filter by</summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box ">
                 <li onClick={() => handleJobsFilter('rating')}><a>Rating</a></li>
                 <li onClick={() => handleJobsFilter('noOfPage')}><a>Number of pages</a></li>
                 <li onClick={() => handleJobsFilter('publishYear')}><a>Publisher year</a></li>
                </ul>
           </details>
       </div>

      
       <div className="flex my-6 items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
         <Link
           to={""}
           onClick={() => setTabIndex(0)}
           className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
             tabIndex === 0 ? "border border-b-0" : "border-b"
           } rounded-t-lg border-gray-400`}
         >
           <span>Read Book</span>
         </Link>
         <Link
           onClick={() => setTabIndex(1)}
           to={`wishlist`}
           className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
             tabIndex === 1 ? "border border-b-0" : "border-b"
           } rounded-t-lg border-gray-400`}
         >
           <span>Wish List</span>
         </Link>
       </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
