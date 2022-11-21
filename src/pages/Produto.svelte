<script>
  import Header from "../components/Header.svelte";
  import Imagem1 from "../assets/image 1.png";
</script>

<Header></Header>
<main>
  <div class="nomeProduto">
    <p>Nome do Produto</p>
  </div>

  <div class="produtos">
    <img id="produto1" src= {Imagem1} alt="Imagem">
  </div>
  <div class="maisProdutos"> 
    <img class="miniFoto" src= {Imagem1} alt="Imagem">
    <img class="miniFoto" src= {Imagem1} alt="Imagem">
    <img class="miniFoto" src= {Imagem1} alt="Imagem">
    <img class="miniFoto" src= {Imagem1} alt="Imagem">
    <img class="miniFoto" src= {Imagem1} alt="Imagem">
  </div>
    <h2 class="produtosRel">Produtos relacionados</h2>
  <div class="maisFotos">
    <img class="FotosDeoutrodprod" src= {Imagem1} alt="Imagem">
    <img class="FotosDeoutrodprod" src= {Imagem1} alt="Imagem">
    <img class="FotosDeoutrodprod" src= {Imagem1} alt="Imagem">
  </div>
  <h2>Nome Produto</h2>
  <p id="texto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal d</p>
 <div class="especificacoes"><p>Especificações <br>
    CPU Base Freq. <br>
    2.3GHz <br>
    CPU Max Freq. <br>
    Até 3.8GHz <br>
    Nº de núcleos de CPU <br>
    4 <br>
    Nº de threads <br>
    8 <br>
    Cachê L2 total <br>
    2MB <br>
    Cachê L3 total <br>
    8MB <br>
    TDP <br>
    15W <br>
    Junction Temp Range <br>
    0-105°C <br>
    Security Processor <br>
    Sim</p>
    <p>Especificações <br>
      CPU Base Freq. <br>
      2.3GHz <br>
      CPU Max Freq. <br>
      Até 3.8GHz <br>
      Nº de núcleos de CPU <br>
      4 <br>
      Nº de threads <br>
      8 <br>
      Cachê L2 total <br>
      2MB <br>
      Cachê L3 total <br>
      8MB <br>
      TDP <br>
      15W <br>
      Junction Temp Range <br>
      0-105°C <br>
      Security Processor <br>
      Sim</p>
      <p>Especificações <br>
        CPU Base Freq. <br>
        2.3GHz <br>
        CPU Max Freq. <br>
        Até 3.8GHz <br>
        Nº de núcleos de CPU <br>
        4 <br>
        Nº de threads <br>
        8 <br>
        Cachê L2 total <br>
        2MB <br>
        Cachê L3 total <br>
        8MB <br>
        TDP <br>
        15W <br>
        Junction Temp Range <br>
        0-105°C <br>
        Security Processor <br>
        Sim</p> </div> 
</main>

<style>
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .nomeProduto {
    background-color: #737994; 
    color: white;
    padding: 0.2rem;
    padding-inline: 7rem;
    margin: 5rem;
  }

  .produtos {
    border-radius: 5px;
    overflow: hidden;
  }

  #produto1 {
      width: 80rem;
  }

  .maisProdutos {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
    margin: 1rem;
  }

  .miniFoto {
    width: 15rem;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .produtosRel {
    align-self: flex-start;
    padding: 4rem;
  }
  .FotosDeoutrodprod{
    margin: 27px;
    width: 35rem;
  }

  #texto {
    text-align: center;
  }
  .especificacoes {
    display: flex;
    flex-direction: row;
    gap: 10rem;
  }
  :global(.dark) main {
    background-color: #303446;
  }
  :global(.light) main {
    background-color: white;
  }

  @media(max-width:1200px) {
    #produto1 {
      width: 50rem;
    }
    .miniFoto {
      width: 9rem;
    }
    .produtosRel {
      align-self: center;
    }
    .FotosDeoutrodprod {
      width: 45rem;
    }
    .maisFotos {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>