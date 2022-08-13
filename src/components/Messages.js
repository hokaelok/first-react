import { useState } from "react";

export default function Messages() {
    const [messages, setMessages] = useState([]);
    return (
        <>
            <h1 className="text-2xl font-bold p-5">
                {messages.length > 0
                    ? `You have ${messages.length} unread ${
                          messages.length > 1 ? "messages" : "message"
                      }`
                    : "You're all caught up!"}
            </h1>
            <div className="p-5">
                {messages.map((message) => {
                    return (
                        <p className="my-3">
                            {`${messages.indexOf(message) + 1}. ${message}`}
                        </p>
                    );
                })}
            </div>
        </>
        // ===============================

        // <div>
        //     {messages.length > 0 ? (
        //         <h1>
        //             You have {messages.length} unread{" "}
        //             {messages.length > 1 ? "messages" : "message"}!
        //         </h1>
        //     ) : (
        //         <h1>You're all caught up!</h1>
        //     )}
        // </div>
    );
}
