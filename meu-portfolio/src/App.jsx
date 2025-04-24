import CertificacaoCard from './components/CertificacaoCard';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">Abdaisy Conceição</a>
          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#certificacoes">Certificações</a>
            <a href="#projetos">Projetos</a>
            <a href="#habilidades">Habilidades</a>
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
            <h1>Desenvolvedor Full Stack</h1>
            <p>Transformando ideias em experiências digitais memoráveis</p>
            <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
          </div>
        </section>

        <section id="certificacoes" className="section">
          <h2 className="section-title">Certificações</h2>
          <div className="grid">
            <CertificacaoCard />
            {/* Você pode adicionar mais cards de certificação aqui */}
          </div>
        </section>

        <section id="projetos" className="section">
          <h2 className="section-title">Projetos</h2>
          <div className="grid">
            <div className="card">
              <img src="projeto-thumb.jpg" alt="Projeto" />
              <h3>Nome do Projeto</h3>
              <p>Descrição do projeto e tecnologias utilizadas</p>
              <div className="card-links">
                <a href="#" className="btn btn-primary">Demo</a>
                <a href="#" className="btn">GitHub</a>
              </div>
            </div>
            {/* Mais cards de projeto */}
          </div>
        </section>

        {/* Adicione as outras seções seguindo o mesmo padrão */}
      </main>
    </>
  )
}

export default App