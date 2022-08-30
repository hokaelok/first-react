import { useState } from "react";
import { useEffect } from "react";

export default function WindowTrackerCount() {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        function watchSize() {
            console.log("upupupupupup");
            setSize(window.innerWidth);
        }

        window.addEventListener("resize", watchSize);

        return function () {
            window.removeEventListener("resize", watchSize);
        };
    }, []);

    return (
        <>
            <h1>Window width: {size}</h1>
        </>
    );
}
