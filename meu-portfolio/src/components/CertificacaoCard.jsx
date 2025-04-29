import { useEffect } from "react";

function CertificacaoCard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Remove o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="certificacoes-container">
      <div className="card certificacao-card">
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="161469bb-322c-4d78-b319-e1255e189838" 
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>

      <div className="card certificacao-card">
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="01e74b68-0c24-47b6-8901-c4324821c714" 
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>

      <div className="card certificacao-card">
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="907f5991-e7c3-4b47-9e4f-85254541da5a" 
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>

      {/* Novos Badges de Certificação */}
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
          data-share-badge-id="0a1e9f96-f145-41b7-8d0f-e1945e20c5d0" 
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>

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
          data-share-badge-id="93eb08ea-4b9e-406c-b3bc-c381344dcc69" 
          data-share-badge-host="https://www.credly.com">
        </div>
      </div>
    </div>
  );
}

export default CertificacaoCard;
