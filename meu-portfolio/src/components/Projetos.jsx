import React from 'react';

function Projetos() {
  // Array com dados dos projetos
  const projetos = [
    {
      
      descricao: "Programação Avançada em python",
      demoUrl: "https://00097.vercel.app/",
    
   
    },
    {
      
      descricao: "Princípio Metodológico de Programação",
      demoUrl: "https://p-m-programa-o-flax.vercel.app/",
    
    
    },
    {
     
      descricao: "Quiz sobre Sistemas Operacionais",
      demoUrl: "https://sistema-operacional.vercel.app/",
     
      
    },
    {
      
      descricao: "Como Montar Um PC",
      demoUrl: "https://como-montar-um-pc.vercel.app/",
     
   
    },
  ];

  return (
    <section id="projetos" className="section">
      <h2 className="section-title">Projetos</h2>
      <div className="grid">
        {projetos.map((projeto, index) => (
          <div key={index} className="card">
           
           
            <p>{projeto.descricao}</p>
            <div className="card-links">
              <a href={projeto.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
