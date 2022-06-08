import React, { useState } from "react";

export default function YesNoButton() {
    const [result, setResult] = useState(true);
    function changeState() {
        setResult((prevResult) => !prevResult);
    }
    return (
        <div className="text-center">
            <h2 className="mt-10 text-3xl font-bold">
                Do I feel like going out tomorrow?
            </h2>
            <div
                onClick={changeState}
                className="mx-auto mt-10 h-20 w-20 p-5 rounded-full bg-gray-600 text-white text-2xl"
            >
                <h2>{result ? "Yes" : "No"}</h2>
            </div>
        </div>
    );
}
