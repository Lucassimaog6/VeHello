<script>
  import Header from "../Header.svelte";
  import Imagem1 from "../assets/image 1.png";
</script>

<Header />
<main>
  <img class="banner" src={Imagem1} alt="Imagem" />
  <img src={Imagem1} alt="Imagem" />
  <img src={Imagem1} alt="Imagem" />
  <img src={Imagem1} alt="Imagem" />
  <img src={Imagem1} alt="Imagem" />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    padding: 5vw;
    gap: 5vw;
    transition: background-color 300ms;
  }
  :global(.dark) main {
    background-color: #1e1e2e;
  }
  :global(.light) main {
    background-color: #cdd6f4;
  }
  img {
    width: 100%;
    aspect-ratio: 1;
    border: 5px solid #89b4fa;
    border-radius: 5px;
    object-fit: cover;
  }
  .banner {
    aspect-ratio: 2;
    grid-column: 1 /3;
  }
</style>
