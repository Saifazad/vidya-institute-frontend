import { useState } from "react";
import Container from "../layouts/Container";
import { api } from "../service/api";

export default function Contact() {
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    await api.post("/enquiries", data);
    setMsg("Enquiry sent successfully");
    e.target.reset();
  };

  return (
    <Container>
      <form onSubmit={submit} className="max-w-md mx-auto p-6 space-y-3">
        <h2 className="text-xl font-bold">Contact Us</h2>

        <input name="name" placeholder="Name" className="border p-2 w-full" />
        <input name="email" placeholder="Email" className="border p-2 w-full" />
        <input name="phone" placeholder="Phone" className="border p-2 w-full" />
        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2">
          Send Enquiry
        </button>

        {msg && <p className="text-green-600">{msg}</p>}
      </form>
    </Container>
  );
}
