import { useState } from "react";

export default function FirstForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
        employment: "",
        favColor: "",
    });

    // on change function
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    // on submit function
    function handleSubmit(event) {
        event.preventDefault();
        // submitToApi(formData);
        console.log(formData);
    }

    return (
        <form className="mx-5" onSubmit={handleSubmit}>
            {/* input text */}
            <input
                className="border-2 p-1"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input
                className="border-2 m-5 p-1"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            {/* input email */}
            <input
                className="border-2 m-5 p-1"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            {/* Textarea */}
            <textarea
                className="border-2 m-5 p-1"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
            />
            <br />
            {/* checkbox */}
            <input
                type="checkbox"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label className="font-bold mx-3" htmlFor="isFriendly">
                Are you friendly?
            </label>
            <br />
            <br />
            {/* radio buttons */}
            <fieldset>
                <legend className="font-bold">Current employment status</legend>

                <input
                    type="radio"
                    name="employment"
                    value="unemployed"
                    id="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label className="mx-3" htmlFor="unemployed">
                    Unemployed
                </label>
                <br />

                <input
                    type="radio"
                    name="employment"
                    value="part-time"
                    id="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label className="mx-3" htmlFor="part-time">
                    Part-time
                </label>
                <br />

                <input
                    type="radio"
                    name="employment"
                    value="full-time"
                    id="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label className="mx-3" htmlFor="full-time">
                    Full-time
                </label>
                <br />
            </fieldset>
            <br />

            {/* select / option dropdown box */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                name="favColor"
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">Choose a color</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
