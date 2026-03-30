import React, { useEffect, useState } from "react";
import './index.css';
import axios from 'axios';

const App =()=>{

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  useEffect(function(){
    getData(8)
  },[index])

  const getData= async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`);
    setUserData(response.data);
    console.log(response.data);
    }

  let printUserData = 'No User Available'

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return(
        <div key={idx}>
        <a href={elem.url} target="_blank">
      <div className="h-40 w-44 bg-white">
        <img className="h-full object-cover" src={elem.download_url} alt="" />
      </div>
      <h1 className="text-amber-50 font-bold text-lg">{elem.author}</h1>
      </a>
      </div>
      );
    });
  }


  return(
    <div className="bg-black overflow-auto h-screen p-4">
      <h1 className="flex justify-center items-center gap-6 text-amber-300 text-4xl font-semibold">Gallery App</h1>
      <div className="flex flex-wrap gap-4 m-9">
        {printUserData}
      </div>

      <div className="flex justify-center items-center gap-6 p-4">
        <button
         onClick={()=>{
          if(index>1){
          setIndex(index-1);
          }
         }}
         className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-3 font-semibold">Prev</button>
        <h4 className="text-amber-300">Page {index}</h4>
        <button
         onClick={()=>{
          setIndex(index+1);
         }}
         className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-3 font-semibold">Next</button>
      </div>
    </div>
  )
}

export default App;
