//import React from 'react'
import { arttir, azalt } from "./counterSlice";
import {useAppDispatch, useAppSelector} from "./store";

const App = () => {
  const deger=useAppSelector((state: { counter: { value: any; }; })=>state.counter.value);
  const dispatch=useAppDispatch();
  return (
    <div>
      <span className="text-6xl">{deger}</span>
      <div className="flex">
        <button onClick={()=>dispatch(arttir())}
        className="bg-blue-300 px-4 py-2 rounded text-white">Arttır</button>
        <button onClick={()=>dispatch(azalt())}
        className="bg-purple-300 px-4 py-2 rounded text-white">Azalt</button>
      </div>
    </div>
  )
};

export default App;