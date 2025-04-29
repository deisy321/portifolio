import React from "react";

const SobreMim = () => {
  return (
    <section id="sobre-mim" className="sobre-mim-section">
      <h2>Sobre Mim</h2>
      <div className="sobre-mim-content">
        <div className="foto-container">
          {/* Referenciando a imagem da pasta public */}
          <img src="/images/minhafoto.jpg" alt="Foto de Deisy" className="foto" />
        </div>
        <div className="descricao">
          <p>Olá! Sou Deisy, uma desenvolvedora apaixonada por programação.</p>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
