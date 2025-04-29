import React from 'react';
import SobreMim from './components/SobreMim';
import Contato from './components/Contato';
import CertificacaoCard from './components/CertificacaoCard';
import Projetos from './components/Projetos'; // Importando o componente de Projetos

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">Abdaisy Conceição</a>
          <div className="nav-links">
            <a href="#sobre-mim">Sobre Mim</a>
            <a href="#certificacoes">Certificações</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
          <div className="menu-btn">
            <span></span>
          </div>
        </div>
      </nav>

      <main className="main-container">
        <section className="hero">
          <div className="hero-content">
            <h1>Desenvolvedora Full Stack</h1>
            <p>Transformando ideias em experiências digitais memoráveis</p>
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
          </div>
        </section>

        {/* Seção Sobre Mim */}
        <section id="sobre-mim">
          <SobreMim />
        </section>

        {/* Seção Certificações */}
        <section id="certificacoes" className="section">
          <h2 className="section-title">Certificações</h2>
          <div className="grid">
            <CertificacaoCard />
          </div>
        </section>

        {/* Seção Projetos */}
        <Projetos /> {/* Aqui está o componente de Projetos */}
        
        {/* Seção Contato */}
        <section id="contato">
          <Contato />
        </section>
      </main>

      <script async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    </>
  );
}

export default App;
