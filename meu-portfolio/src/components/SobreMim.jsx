import React from "react";

const SobreMim = () => {
  return (
    <section id="sobre-mim" className="sobre-mim-section">
      <h2>Sobre Mim</h2>
      <div className="sobre-mim-content">
        <div className="foto-container">
          <img src="/images/minhafoto.jpg" alt="Foto de Deisy" className="foto" />
        </div>
        <div className="descricao">
        <p>
  Olá! Sou Deisy, uma desenvolvedora apaixonada por programação. Gosto de transformar ideias em soluções criativas e funcionais usando tecnologias modernas.
   Tenho interesse em desenvolvimento Full Stack, especialmente com React, Node.js e tudo que envolva criar experiências web incríveis. Atualmente,
    estou focada em aprender cada vez mais, contribuir com projetos e evoluir na carreira como desenvolvedora.
</p>


          <h3>Minhas habilidades:</h3>
          <ul className="lista-habilidades-icones">
            <li><i className="devicon-python-plain colored"></i> Python</li>
            <li><i className="devicon-mysql-plain colored"></i> SQL</li>
            <li><i className="devicon-java-plain colored"></i> Java</li>
            <li><i className="devicon-html5-plain colored"></i> HTML</li>
            <li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
            <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
            <li><i className="devicon-react-original colored"></i> React</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
