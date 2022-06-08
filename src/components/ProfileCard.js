import { useState } from "react";
import ProfileCardStar from "./ProfileCardStar";

export default function ProfileCard() {
    const [contact, setContact] = useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });

    function toggleFavorite() {
        setContact((prevContact) => {
            return { ...prevContact, isFavorite: !prevContact.isFavorite };
        });
    }

    return (
        <div className="card border-2 border-gray-300 rounded-lg shadow-md mx-auto w-[230px] mt-10">
            <div className="pfp border-2 border-red-600 my-5 mx-auto w-32 h-32 rounded-full">
                <img src="../assets/images/john-doe.jpg" alt="profile" />
            </div>
            <ProfileCardStar
                isFilled={contact.isFavorite}
                handleClick={toggleFavorite}
            />
            <div className="info mb-10 mx-5">
                <h2 className="text-2xl font-bold mb-3">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p>
                    <small>{contact.phone}</small>
                </p>
                <p>
                    <small>{contact.email}</small>
                </p>
            </div>
        </div>
    );
}
