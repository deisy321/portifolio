import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contato = () => {
  return (
    <section id="contato" className="contato-section">
      <h2>Contato</h2>
      <p>Fique à vontade para entrar em contato comigo pelas minhas redes:</p>

      <div className="contato-info">
        <div className="contato-item whatsapp">
          <a
            href="https://wa.me/55924915412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="contato-item linkedin">
          <a
            href="https://www.linkedin.com/in/abdaisy-cravid-05540230a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="contato-item github">
          <a
            href="https://github.com/deisy321"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
