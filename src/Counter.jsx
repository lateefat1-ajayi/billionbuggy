import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  });

  return (
    <div className="mt-4 p-4 bg-orange-100 rounded-lg">
      <p className="font-bold">Count: {count}</p>
      <button
        onClick={setCount(0)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Reset
      </button>
    </div>
  );
}
