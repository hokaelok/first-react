import { useEffect, useState } from "react";

export default function FirstApi() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then((response) => response.json())
            .then((data) => setStarWarsData(data));
    }, [count]);

    // Add function
    function Add() {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    return (
        <div className="p-5">
            <h1 className="font-bold text-lg mb-3">The count is {count}</h1>
            <h3 className="font-bold text-lg">{starWarsData.name}</h3>
            <button className="border-2 border-black p-2" onClick={Add}>
                NEXT
            </button>
            <br />
            <pre>{JSON.stringify(starWarsData, null, 4)}</pre>
        </div>
    );
}
