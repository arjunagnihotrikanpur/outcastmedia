import React, { useState } from "react";
import Button from "./Buttons/Button";
import { db } from "../config/Firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const messagesCollection = collection(db, "messages");

  const handleSubmit = async () => {
    alert("Form Submitted");
    console.log(name, email, contact, message);
    let data = {
      name: name,
      email: email,
      contact: contact,
      message: message,
    };
    const docRef = await addDoc(messagesCollection, data);
    console.log(docRef.id);
    setName("");
    setEmail("");
    setContact("");
    setMessage("");
  };

  return (
    <div className="div bg-black h-screen">
      <div className="mx-36 flex flex-col md:flex-row justify-between">
        <div className="text-8xl text-white font-bold">
          Got A<br />
          Project?
          <br />
          <span className="text-themeYellow underline">Let's Talk.</span>
        </div>
        <div className="flex flex-col space-y-12 mr-36">
          {/* Name Input */}
          <div>
            <div className="text-2xl text-white ml-6">Name.</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-full w-96 h-6 outline-0 outline outline-white fill-none text-1xl px-12 py-6 shadow appearance-none border-red-500"
            ></input>
          </div>

          {/* Contact Input */}
          <div>
            <div className="text-2xl text-white ml-6">Contact No.</div>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="rounded-full w-96 h-6 outline-0 outline outline-white fill-none text-1xl px-12 py-6 shadow appearance-none border-red-500"
            ></input>
          </div>

          {/* Email Input */}
          <div>
            <div className="text-2xl text-white ml-6">Email.</div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full w-96 h-6 outline-0 outline outline-white fill-none text-1xl px-12 py-6 shadow appearance-none border-red-500"
            ></input>
          </div>

          {/* Message Input */}
          <div>
            <div className="text-2xl text-white ml-6">Message.</div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-full w-96 h-6 outline-0 outline outline-white fill-none text-1xl px-12 py-6 shadow appearance-none border-red-500"
            ></input>
          </div>

          <Button content="Send" handleClick={handleSubmit} />
        </div>
      </div>
      ;
    </div>
  );
};

export default ContactSection;
