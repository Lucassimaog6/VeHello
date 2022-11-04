<script>
  import Img1 from "../img/img1.png"
  import Img2 from "../img/img2.jpg"
  import Img3 from "../img/img3.jpg"
</script>

<main>
 <img class="banner" src={Img1} alt="Imagem">
 <img src={Img2} alt="Imagem">
 <img src={Img3} alt="Imagem">
</main>

<style>
  main{
    background-color: #BAC2DE;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
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