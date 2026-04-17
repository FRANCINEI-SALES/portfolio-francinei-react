import React from "react";
import Header from "./components/Header";
import Projetos from "./components/Projetos";

function App() {
  return (
    <div>
      <Header />
      <section id="sobre">
        <h2>Sobre Mim</h2>
        <p>
          Sou estudante do Curso de TECNOLOGIA EM SISTEMAS PARA INTERNET (EAD-UAPI) - polo de São Miguel da Baixa Grande - PI.
        </p>
        <img
          src="https://github.com/user-attachments/assets/7d107631-017a-4034-abbb-778cb5de66a7"
          alt="Foto de Francinei Sales de Sousa"
          width="250"
          height="200"
        />
      </section>
      <Projetos />
      <footer>
        <p style={{ textAlign: "center" }}>
          Desenvolvido por Francinei Sales de Sousa.<br />
          &copy; 2026 - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
