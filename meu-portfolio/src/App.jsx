import CertificacaoCard from './components/CertificacaoCard';
import SobreMim from './components/SobreMim'; // Adicione esta linha para importar o componente SobreMim
import Contato from './components/Contato'
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

        {/* Seção Sobre Mim */}
        <SobreMim /> {/* Aqui estamos incluindo a seção Sobre Mim */}

        <section id="certificacoes" className="section">
          <h2 className="section-title">Certificações</h2>
          <div className="grid">
            {/* Seu CertificacaoCard original */}
            <CertificacaoCard />

            {/* Novas certificações */}
            <div className="card certificacao-card">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="ee1a5395-cb5c-4fdc-8e21-3441e415017b" 
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
            <div className="card certificacao-card">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="54979f21-fd85-440e-b746-cb937133816d" 
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
            <div className="card certificacao-card">
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="93eb08ea-4b9e-406c-b3bc-c381344dcc69" 
                data-share-badge-host="https://www.credly.com">
              </div>
            </div>
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
          </div>
        </section>
        {/* Seção de Contato */}
        <Contato /> {/* Aqui estamos incluindo a seção Contato */}

      </main>

      {/* Script do Credly para os badges de certificação */}
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
    </>
  );
}

export default App;
