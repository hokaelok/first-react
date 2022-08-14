import { useState } from "react";

export default function NewsLetterForm() {
    // user data
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        comfirmPass: "",
        joinNewsLetter: false,
    });

    // on change function
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // on submit function
    function handleSubmit(event) {
        event.preventDefault();
        if (userData.password === userData.comfirmPass) {
            if (userData.joinNewsLetter) {
                console.log("Thanks for joining Newsletter!");
            }
            // submitToApi(userData);
            console.log(userData);
        } else {
            console.log("Password do not match!");
        }
    }

    return (
        <div className="bg-purple-600 h-[700px] py-[100px]">
            <form
                className="mx-auto p-10 border-2 w-[400px] bg-white rounded-lg shadow-md"
                onSubmit={handleSubmit}
            >
                {/* email */}
                <input
                    className="my-2 border-2 p-2 w-[300px]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={handleChange}
                />
                <br />
                {/* password */}
                <input
                    className="my-2 border-2 p-2 w-[300px]"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={handleChange}
                />
                <br />
                {/* comfirm password */}
                <input
                    className="my-2 border-2 p-2 w-[300px]"
                    type="password"
                    name="comfirmPass"
                    id="comfirmPass"
                    placeholder="Comfirm Password"
                    value={userData.comfirmPass}
                    onChange={handleChange}
                />
                <br />
                {/* join newsletter */}
                <input
                    className="my-2"
                    type="checkbox"
                    id="joinNewsLetter"
                    name="joinNewsLetter"
                    onChange={handleChange}
                />
                <label className="font-bold mx-3" htmlFor="joinNewsLetter">
                    I want to join the newsletter
                </label>
                <br />
                <br />
                {userData.password !== userData.password && (
                    <p
                        id="checker"
                        className="text-red-500 text-center mb-3 font-bold hidden"
                    >
                        Password not match!
                    </p>
                )}

                <button className="px-5 py-3 mx-[100px] rounded-md text-white font-bold bg-purple-500">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
