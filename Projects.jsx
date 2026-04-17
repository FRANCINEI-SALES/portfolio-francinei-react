import React from "react";

const projetos = [
  {
    titulo: "SaborExpress - Aplicativo de Vendas de Bolos e Salgados",
    descricao: "Aplicativo inovador para facilitar a venda de bolos e salgados artesanais...",
  },
  {
    titulo: "Identidade Visual & Vetorização",
    descricao: "Criação de materiais gráficos e manipulação de imagens utilizando técnicas avançadas de design digital.",
  }
];

function Projetos() {
  return (
    <section id="projetos">
      <h3>Meus Projetos</h3>
      {projetos.map((proj, index) => (
        <article key={index} className="projeto">
          <h4>{proj.titulo}</h4>
          <p>{proj.descricao}</p>
        </article>
      ))}
    </section>
  );
}

export default Projetos;