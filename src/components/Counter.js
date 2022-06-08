import React, { useState } from "react";
import CountInCounter from "./CountInCounter";

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
            <CountInCounter number={count} />
            <button onClick={countPlus} className="border-2 border-black w-10">
                +
            </button>
        </div>
    );
}
