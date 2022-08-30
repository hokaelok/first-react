import WindowTrackerCount from "./WindowTrackerCount";
import { useState } from "react";

export default function WindowTracker() {
    const [show, setShow] = useState(true);

    function changeShowState() {
        setShow((prevState) => !prevState);
    }

    return (
        <div className="bg-orange-400 h-[1000px] w-[100%] flex">
            <div className="mx-auto text-center">
                <button
                    className="bg-white h-36 px-36 rounded-lg font-bold text-2xl my-16 "
                    onClick={changeShowState}
                >
                    Toggle WindowTracker
                </button>
                <div className="font-bold text-5xl text-white">
                    {show && <WindowTrackerCount />}
                </div>
            </div>
        </div>
    );
}
