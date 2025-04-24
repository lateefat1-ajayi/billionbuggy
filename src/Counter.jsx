import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);



useEffect(() => {
  setCount((prev) => prev + 1)
}
,[])

  return (
    <div className="mt-4 p-4 w-4/6 bg-orange-100 rounded-lg text-center items-center justify-center gap-1 ">
      <p className="font-bold">Count: {count}</p>
       
      <button onClick={() => setCount(0)} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Reset</button>
     
    </div>
  );
}
