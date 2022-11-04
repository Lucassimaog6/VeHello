<script>
  import Imagem1 from "./assets/image 1.png"
</script>

<main>
 <img class="banner" src={Imagem1} alt="Imagem">
 <img src={Imagem1} alt="Imagem">
 <img src={Imagem1} alt="Imagem">
</main>

<style>
  main{
    background-color: #BAC2DE;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    padding: 5vw;
    gap: 5vw;
  }
  img{
    width: 100%;
    height: 100%;
    border: 5px solid #89B4FA;
    border-radius: 5px;
    object-fit: cover;
  }
  .banner{
    grid-column: 1 /3;
  }
</style>