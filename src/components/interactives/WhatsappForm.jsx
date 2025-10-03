/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim());
  };

  // Capitalizar nome
  const handleNameChange = (e) => {
    let value = e.target.value;
    // capitaliza cada palavra sem remover os espaços
    value = value
      .split(" ")
      .map((word) =>
        word.length > 0 ? word.charAt(0).toUpperCase() + word.slice(1) : ""
      )
      .join(" ");
    setName(value);
  };

  // Capitalizar letra inicial da mensagem
  const handleMessageChange = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setMessage(value);
  };

  // Formatar telefone
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // só números
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length <= 10) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }
    setPhone(value);
  };

  const sendEmail = () => {
    const validationErrors = {};
    if (!name.trim()) validationErrors.name = "O campo Nome é obrigatório.";
    if (!phone.trim())
      validationErrors.phone = "O campo Telefone é obrigatório.";
    if (!email.trim()) {
      validationErrors.email = "O campo E-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Digite um e-mail válido.";
    }
    if (!message.trim())
      validationErrors.message = "O campo Mensagem é obrigatório.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const templateParams = {
      name: name,
      phone,
      email: email,
      message,
    };

    emailjs
      .send(
        "service_3m1hfaw", // ID do seu serviço EmailJS
        "template_v67tp1f", // ID do seu template
        templateParams,
        "zEMsClcrIfe_TEZeO" // sua chave pública
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setSuccess(true);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setErrors({});
          alert(
            "As informações preenchidas no formulário foram enviadas corretamente."
          );
        },
        (err) => {
          console.error("ERRO AO ENVIAR EMAIL:", err);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-evenly gap-8">
      {/* Coluna esquerda - informações de contato */}
      <div className="md:w-1/2 space-y-6 text-center tablet2:text-start">
        <h2 className="text-xl font-bold">Fale Conosco</h2>
        <p className="text-gray-600">
          Preencha o formulário ao lado para falar conosco.
        </p>

        {/* Telefones */}
        <div>
          <h3 className="font-semibold mb-2">TELEFONE:</h3>
          <div className="flex items-center gap-2 text-gray-700 justify-center tablet2:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-icon lucide-phone"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <span>São Paulo: 11 - 5282-1855</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <h3 className="font-semibold mb-2">E-MAIL</h3>
          <a
            href="mailto:contato@marciogimenez.com.br"
            className="flex items-center gap-2 text-gray-700 justify-center tablet2:justify-start"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            contato@marciogimenez.com.br
          </a>
        </div>

        {/* Endereços */}
        <div>
          <h3 className="font-semibold mb-2">ENDEREÇOS</h3>
          <p className="text-gray-700">
            Avenida Brigadeiro Faria Lima, 1811, ESC 1119,
            <br />
            Jardim Paulistano, São Paulo/SP{" "}
          </p>
          <p className="text-gray-700 mt-2">
            CEP: 01452-001. <br />
          </p>
        </div>
      </div>

      {/* Coluna direita - formulário */}
      <div className="md:w-1/2 flex items-center">
        <div className="w-full">
          {/* Nome */}
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={handleNameChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none"
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={handlePhoneChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* E-mail */}
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border border-gray-400 rounded-sm focus:outline-none"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Mensagem */}
          <div className="mb-4">
            <textarea
              className="w-full px-3 py-2 border border-gray-400 rounded-sm h-28 focus:outline-none"
              placeholder="Mensagem"
              value={message}
              onChange={handleMessageChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Botão */}
          <button
            type="button"
            className="w-full bg-[#0f1112] text-white py-3 uppercase text-sm font-bold tracking-wider hover:opacity-90 transition disabled:opacity-60"
            onClick={sendEmail}
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
