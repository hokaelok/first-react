import { useState } from "react";
import BoxesData from "../assets/API/BoxesData";
import Box from "./BoxInBoxes";

export default function Boxes() {
    const [boxes, setBoxes] = useState(BoxesData);

    const toggleBox = (id) => {
        setBoxes((prevboxes) => {
            return prevboxes.map((box) => {
                return box.id === id ? { ...box, on: !box.on } : box;
            });
        });
    };

    const boxElements = boxes.map((box) => (
        <Box
            key={box.id}
            id={box.id}
            on={box.on}
            handleClick={() => toggleBox(box.id)}
        />
    ));

    return (
        <div className="mt-5">
            <div>{boxElements}</div>
        </div>
    );
}
