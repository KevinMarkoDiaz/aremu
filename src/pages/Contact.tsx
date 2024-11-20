import React from "react";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <div className="flex w-screen md:h-screen justify-around content-center max-md:flex-col max-md:py-32 max-md:gap-16 max-md:px-8">
      <div className="flex flex-col self-center gap-8">
        <p className="font-semibold text-4xl">We want to hear from you.</p>
        <div>
          <p>(555) 555-5555</p>
          <p>email@example.com</p>
        </div>
        <div>
          <p>123 Demo St</p>

          <p>New York, NY 12345</p>
        </div>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
