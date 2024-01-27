"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      mensagem: e.target.message.value,
    };
    console.log(data);
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/create_four";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-800 to-transparent rounded-full h-80 w-80 -z-2 blur-lg absolute top-3/4 -left-4 tranform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-0">
        <h5 className="text-xl font-bold text-white my-2">
          Vamos entrar em contato
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Atualmente estou em busca de oportunidades, minha caixa de entrada
          está sempre aberta. Se você tiver alguma dúvida ou apenas quiser dizer
          oi, farei o possível para te retornar!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/juliadelis/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/juliadelis/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-0">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="seuemail@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Apenas dando um oi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos falar sobre..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar Mensagem
          </button>
          {emailSubmitted && (
            <h5 className="text-green-500 text-xl mt-2">
              Email enviado com sucesso!
            </h5>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
