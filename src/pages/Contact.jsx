import React, { useId, useRef, useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const nameRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      nameRef.current?.focus();
      return;
    }

    toast.success("Message submitted successfully");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">

        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div>
            <label htmlFor={nameId}>Name</label>

            <input
              ref={nameRef}
              id={nameId}
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />

            {errors.name && (
              <p className="text-red-500 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={emailId}>Email</label>

            <input
              id={emailId}
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-1"
            />

            {errors.email && (
              <p className="text-red-500 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor={messageId}>Message</label>

            <textarea
              id={messageId}
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full border rounded-lg p-3 mt-1"
            />

            {errors.message && (
              <p className="text-red-500 mt-1">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-lg"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;