import React from "react";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <div className="flex w-screen md:min-h-screen justify-around content-center max-md:flex-col max-md:py-32 max-md:gap-16 max-md:px-8">
      <div className="flex flex-col self-center gap-8">
        <p className="font-semibold text-4xl">Queremos saber de ti.</p>
        <div>
          <p>(+1) 786 419 6666</p>
          <p>juandiaz@supercolombiana.com</p>
        </div>
        <div>
          <p>1020 Watters creek Blvd</p>

          <p>Allen, TX 75013</p>
        </div>
      </div>

      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
