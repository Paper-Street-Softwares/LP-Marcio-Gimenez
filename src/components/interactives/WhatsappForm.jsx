/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WhatsAppIcon from "../../assets/importAssets/WhatsAppIcon.webp";

const WhatsappForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Função para colocar a primeira letra maiúscula
  const capitalizeFirstLetter = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  // Função para validar e-mail
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  const sendToWhatsapp = () => {
    const validationErrors = {};

    if (!name.trim()) {
      validationErrors.name = "O campo Nome completo é obrigatório.";
    }

    if (!email.trim()) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Digite um e-mail válido.";
    }

    if (!subject.trim()) {
      validationErrors.subject = "O campo Assunto é obrigatório.";
    }

    if (!message.trim()) {
      validationErrors.message = "O campo Mensagem é obrigatório.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const phoneNumber = "5511963010654"; // Coloque seu número
    const text = `*Nome completo:* ${name}%0A*E-mail:* ${email}%0A*Assunto:* ${subject}%0A*Mensagem:* ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white p-6 w-full desktop1:w-full h-auto">
      <div className="w-full text-paragraph3 phone3:text-paragraph4">
        {/* Nome completo */}
        <div className="mb-6">
          <label className="block mb-1 text-secondary">Nome completo:</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            value={name}
            onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}
            placeholder="Digite seu nome completo"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        {/* E-mail */}
        <div className="mb-6">
          <label className="block mb-1 text-secondary">E-mail:</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Assunto */}
        <div className="mb-6">
          <label className="block mb-1 text-secondary">Assunto:</label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            value={subject}
            onChange={(e) => setSubject(capitalizeFirstLetter(e.target.value))}
            placeholder="Digite o assunto"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>

        {/* Mensagem */}
        <div className="mb-6">
          <label className="block mb-1 text-secondary">Mensagem:</label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            value={message}
            onChange={(e) => setMessage(capitalizeFirstLetter(e.target.value))}
            placeholder="Digite sua mensagem"
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>

        {/* Botão */}
        <button
          type="button"
          className="flex items-center justify-center w-full font-medium text-white bg-bgSectionDark transition-all rounded-lg h-10 phone2:h-12 hover:scale-105"
          onClick={sendToWhatsapp}
        >
          <img
            src={WhatsAppIcon}
            className="w-6 h-6 mr-2 phone2:w-8 phone2:h-8"
            alt="WhatsApp Icon"
          />
          Enviar mensagem
        </button>
      </div>
    </div>
  );
};

export default WhatsappForm;
