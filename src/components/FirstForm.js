import { useState } from "react";

export default function FirstForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        isFriendly: true,
    });

    console.log(formData);
    console.log(`${formData.firstName} ${formData.lastName} ${formData.email}`);

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

    return (
        <form className="mx-5">
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
            <input
                className="border-2 m-5 p-1"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <textarea
                className="border-2 m-5 p-1"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
            />
            <br />
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
        </form>
    );
}
