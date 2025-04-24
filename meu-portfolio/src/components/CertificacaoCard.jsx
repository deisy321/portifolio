import { useEffect } from "react";

function CertificacaoCard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="card certificacao-card">
      <div 
        data-iframe-width="150" 
        data-iframe-height="270" 
        data-share-badge-id="ee1a5395-cb5c-4fdc-8e21-3441e415017b" 
        data-share-badge-host="https://www.credly.com">
      </div>
      <div className="certificacao-info">
        <h3>Nome da Certifica��o</h3>
        <p className="certificacao-data">Data de Conclus�o</p>
        <p className="certificacao-desc">
          Descri��o da certifica��o e habilidades adquiridas
        </p>
      </div>
    </div>
  );
}

export default CertificacaoCard;
