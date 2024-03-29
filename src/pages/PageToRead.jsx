import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getReadBooks } from "../Utils";
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  
  const allBooks=useLoaderData();
    
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




  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };



  return (
    <div>
    
      <BarChart width={900} height={300} data={readList}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" />
        <YAxis />
        <Bar
          dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} 
          label={{ position: "top" }}
        >
          {
            readList.map((entry, index) => (
               <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))
          }
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageToRead;
