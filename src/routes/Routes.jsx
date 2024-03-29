import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Book from "../pages/Book";
import ListedBooks from "../pages/ListedBooks";
import PageToRead from "../pages/PageToRead";
import ReadList from "../pages/ReadList";
import WishList from "../pages/WishList";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/book/:bookId',
            element:<Book></Book>,
            loader: ()=> fetch('/fakeData.json')
        },
        {
            path:'/PageToRead',
            element:<PageToRead></PageToRead>,
            loader: ()=> fetch('/fakeData.json')
        },
        {
            path:'/listedBooks',
            element:<ListedBooks></ListedBooks>,
            children:[
              {
                index:true,
                element:<ReadList></ReadList>,
                loader: ()=> fetch('/fakeData.json'),
              },
              {
                path:'wishlist',
                element:<WishList></WishList>,
                loader: ()=> fetch('/fakeData.json'),
              }
            ]

        }
      ]
    },
  ]);
  