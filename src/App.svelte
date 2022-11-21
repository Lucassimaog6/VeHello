<script>
  import { Route, Router } from "svelte-navigator";
  import Contato from "./pages/Contato.svelte";
  import Home from "./pages/Home.svelte";
  import Produto from "./pages/Produto.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/produto" component={Produto} />
  <Route path="/contato" component={Contato} />
</Router>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
  :global(body){
    margin: 0;
  }
  :global(*){
    box-sizing: border-box;
    font-family: 'Source Serif Pro';
  }
</style>


