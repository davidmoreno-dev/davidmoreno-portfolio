"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const content = {
  es: {
    name: "Nombre",
    email: "Email",
    phone: "Teléfono",
    message: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@email.com",
    phonePlaceholder: "Tu teléfono",
    messagePlaceholder: "Cuéntame en qué puedo ayudarte",
    submit: "Enviar mensaje",
    success:
      "Se ha abierto tu gestor de correo con el mensaje preparado para enviar.",
    error: "Lo sentimos, se ha producido un error al preparar tu mensaje.",
    mailSubject: "Nuevo mensaje de",
    mailFrom: "la web",
    mailName: "Nombre",
    mailEmail: "Email",
    mailPhone: "Teléfono",
    mailMessage: "Mensaje",
  },
  ca: {
    name: "Nom",
    email: "Email",
    phone: "Telèfon",
    message: "Missatge",
    namePlaceholder: "El teu nom",
    emailPlaceholder: "tu@email.com",
    phonePlaceholder: "El teu telèfon",
    messagePlaceholder: "Explica'm en què et puc ajudar",
    submit: "Enviar missatge",
    success:
      "S'ha obert el teu gestor de correu amb el missatge preparat per enviar.",
    error: "Ho sentim, s'ha produït un error en preparar el teu missatge.",
    mailSubject: "Nou missatge de",
    mailFrom: "la web",
    mailName: "Nom",
    mailEmail: "Email",
    mailPhone: "Telèfon",
    mailMessage: "Missatge",
  },
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    phonePlaceholder: "Your phone",
    messagePlaceholder: "Tell me a bit about what you need",
    submit: "Send message",
    success:
      "Your email app has been opened with the message ready to send.",
    error: "Sorry, there was an error preparing your message.",
    mailSubject: "New message from",
    mailFrom: "the website",
    mailName: "Name",
    mailEmail: "Email",
    mailPhone: "Phone",
    mailMessage: "Message",
  },
  sv: {
    name: "Namn",
    email: "E-post",
    phone: "Telefon",
    message: "Meddelande",
    namePlaceholder: "Ditt namn",
    emailPlaceholder: "du@email.com",
    phonePlaceholder: "Ditt telefonnummer",
    messagePlaceholder: "Berätta lite om vad du behöver hjälp med",
    submit: "Skicka meddelande",
    success:
      "Ditt e-postprogram har öppnats med meddelandet klart att skicka.",
    error: "Tyvärr uppstod ett fel när meddelandet skulle förberedas.",
    mailSubject: "Nytt meddelande från",
    mailFrom: "webbplatsen",
    mailName: "Namn",
    mailEmail: "E-post",
    mailPhone: "Telefon",
    mailMessage: "Meddelande",
  },
};

const ContactForm = () => {
  const { language } = useLanguage();
  const copy = content[language];
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("Name")?.toString().trim() || "";
    const email = formData.get("Email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`${copy.mailSubject} ${name || copy.mailFrom}`);
    const body = encodeURIComponent(
      `${copy.mailName}: ${name}\n${copy.mailEmail}: ${email}\n${copy.mailPhone}: ${phone}\n\n${copy.mailMessage}:\n${message}`
    );

    try {
      window.location.href = `mailto:info@davidmoreno.dev?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      name="contactForm"
      id="contact_form"
      className="position-relative z1000"
      onSubmit={handleSubmit}
    >
      <div className="row gx-4">
        <div className="col-lg-6 col-md-6 mb10">
          <div className="field-set">
            <span className="d-label fw-bold">{copy.name}</span>
            <input
              type="text"
              name="Name"
              id="name"
              className="form-control no-border"
              placeholder={copy.namePlaceholder}
              required
            />
          </div>
          <div className="field-set">
            <span className="d-label fw-bold">{copy.email}</span>
            <input
              type="email"
              name="Email"
              id="email"
              className="form-control no-border"
              placeholder={copy.emailPlaceholder}
              required
            />
          </div>
          <div className="field-set">
            <span className="d-label fw-bold">{copy.phone}</span>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control no-border"
              placeholder={copy.phonePlaceholder}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="field-set mb20">
            <span className="d-label fw-bold">{copy.message}</span>
            <textarea
              name="message"
              id="message"
              className="form-control no-border"
              placeholder={copy.messagePlaceholder}
              required
              defaultValue=""
            />
          </div>
        </div>
      </div>
      <div
        className="g-recaptcha"
        data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
      />
      <div id="submit" className="mt20">
        <input
          type="submit"
          id="send_message"
          defaultValue={copy.submit}
          className="btn-main btn-line contact-form__submit"
        />
      </div>
      {status === "success" && (
        <div id="success_message" className="success">
          {copy.success}
        </div>
      )}
      {status === "error" && (
        <div id="error_message" className="error">
          {copy.error}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
