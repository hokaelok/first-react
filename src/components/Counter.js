import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const countPlus = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const countMinus = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div className="counter flex gap-10 text-center justify-center pt-10">
            <button onClick={countMinus} className="border-2 border-black w-10">
                -
            </button>
            <div className="border-2 border-black w-10">
                <h2>{count}</h2>
            </div>
            <button onClick={countPlus} className="border-2 border-black w-10">
                +
            </button>
        </div>
    );
}
