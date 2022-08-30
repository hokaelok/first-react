import { useState } from "react";
import LightDarkHeader from "./LightDarkHeader";
import LightDarkBody from "./LightDarkBody";

export default function LightDarkIndex() {
    const [darkmode, setDarkmode] = useState(false);

    const toggleDarkMode = () => {
        setDarkmode((prevState) => !prevState);
    };

    return (
        <>
            <LightDarkHeader theme={darkmode} handleTheme={toggleDarkMode} />
            <LightDarkBody theme={darkmode} />
        </>
    );
}
