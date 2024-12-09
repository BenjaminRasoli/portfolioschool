import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!/^[A-Öa-ö]+$/.test(formData.name)) {
        toast.error("You have entered an invalid name");
      } else if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
      ) {
        toast.error("You have entered an invalid email address");
      } else if (formData.message.trim() === "") {
        toast.error("Please enter a message");
      } else {
        await toast.promise(
          axios.post(import.meta.env.VITE_APP_EMAIL_KEY, { formData }),
          {
            pending: "Sending...",
            success: "Message sent successfully 👌",
            error: "Failed to send message 🤯",
          }
        );

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="contact" className="scroll-m-6 p-3 ssm:p-container bg-Main">
      <div className="text-center">
        <h1 className="text-White text-h1">Contact</h1>
        <p className="text-White text-p pb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={sendEmail} noValidate autoComplete="on">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-White"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInput}
              value={formData.name}
              autoComplete="name"
              placeholder="What's your name?"
              className="w-full p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 "
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-White"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              onChange={handleInput}
              value={formData.email}
              placeholder="What's your email?"
              className="w-full p-3 mt-2 rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-White"
            >
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleInput}
              value={formData.message}
              rows={7}
              placeholder="Anything extra?"
              className="w-full p-3 mt-2 rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="bg-White hover:bg-Main hover:text-White border w-full py-3 font-semibold rounded-lg focus:outline-none focus:ring-2"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
