import { useState } from "react";
import MemeHeader from "./components/MemeHeader";
import MemeBody from "./components/MemeBody";
import YesNoButton from "./components/YesNoButton";
import Counter from "./components/Counter";
import ProfileCard from "./components/ProfileCard";
import UserHeader from "./components/UserHeader";
import UserBody from "./components/UserBody";
import Boxes from "./components/Boxes";
import Jokes from "./components/Jokes";
import Messages from "./components/Messages";

const App = () => {
    // user state
    // const [user, setUser] = useState("King");

    return (
        <div className="App">
            {/* <MemeHeader />
            <MemeBody /> */}
            {/* <YesNoButton /> */}
            {/* <Counter /> */}
            {/* <ProfileCard /> */}
            {/* <UserHeader name={user} />
            <UserBody name={user} /> */}
            {/* <Boxes /> */}
            {/* <Jokes /> */}
            <Messages />
        </div>
    );
};

export default App;
