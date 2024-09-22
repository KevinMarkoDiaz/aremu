import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validar el email
    if (name === "email") {
      setIsValidEmail(value.includes("@"));
    }
  };

  return (
    <form
      action="https://formsubmit.co/devcontact.studio@gmail.com"
      method="POST"
      className="gap-2 flex flex-col md:w-1/3"
    >
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <input
            className="border-2 rounded-sm"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <input
            className="border-2 rounded-sm"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="border-2 rounded-sm"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message">Message:</label>
        <textarea
          cols={20}
          rows={5}
          className="border-2 rounded-sm h-24 p-2"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        className={`inline-block transition-all ease-linear duration-100 hover:bg-black hover:text-slate-50 border-2 border-black rounded-full h-fit py-2 px-12 ${
          !isValidEmail && "cursor-not-allowed opacity-50"
        }`}
        type="submit"
        disabled={!isValidEmail}
      >
        Submit
      </button>
      {isValidEmail ? (
        <p></p>
      ) : (
        <p className="text-red-600 text-sm">Email invalido</p>
      )}
      <input type="hidden" name="_next" value="http://localhost:3000/home" />
      <input type="hidden" name="_captcha" value="false" />
    </form>
  );
};

export default ContactForm;
