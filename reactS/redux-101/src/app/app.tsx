//import React from 'react'
import { MouseEventHandler } from "react";
import { decrement, increment,incrementByAmount,reset } from "./counterSlice";
import {useAppDispatch, useAppSelector} from "./store";



const App = () => {

  const deger=useAppSelector((state)=>state.counter.value);
  const dispatch=useAppDispatch();

  const handleIncrement=()=>{
    dispatch(increment());


  };

  const handleDecrement=()=>{
    dispatch(decrement());


  };
  const handleReset=()=>{
    dispatch(reset());


  };

  const handleIncrementByValue: (value:number) => {
    dispatch(incrementByAmount(value));


  };
  


  return(<div>
    <button className="bg-blue-300 px-4 py-2 text-white rounded"
    onClick={handleIncrement}>arttır</button>
     <button className="bg-yellow-100 px-4 py-2 text-white"
     onClick={handleDecrement}>azalt</button>
      <button className="bg-green-300 px-4 py-2 text-white"
      onClick={handleReset}>resetle</button>
      <button className="bg-gray-500 px-4 py-2 text-white"
      onClick={()=>handleIncrementByValue(5)}>arttır</button>
     <h1 className="text-3xl">{deger}</h1>
  </div>
  );
  
};

export default App;