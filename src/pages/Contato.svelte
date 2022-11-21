<script>
  import Header from "../Header.svelte";

  let resultado = "";

	function MascaraTelefone() {

			if (resultado[0] !== "(" && resultado[0] !== undefined) {
				resultado = "(" + resultado.slice(0);
			}

			if (resultado[3] !== ")" && resultado[3] !== undefined) {
				resultado = resultado.slice(0, 3) + ") " + resultado.slice(3);
			}

			if (resultado[9] !== "-" && resultado[9] !== undefined) {
				resultado = resultado.slice(0, 9) + "-" + resultado.slice(9);
			}
}
</script>

<Header/>
<main>
  <h1>Contato</h1>

    <div class="cards">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 512 512"
          ><path
            fill="currentColor"
            d="M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32Z"
          /><path
            fill="currentColor"
            d="M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911Zm-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817Z"
          /></svg
        >
        <p>Rua Flora 88, Fauna</p>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 48 48"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M40.72 30.28a62 62 0 0 1-6.3-1.11a3.11 3.11 0 0 0-3 .58c-.53.54-2.06 2.05-3.65 3.61a28.69 28.69 0 0 1-13.1-13.11c1.55-1.59 3-3.11 3.59-3.64a3.11 3.11 0 0 0 .58-3a61.84 61.84 0 0 1-1.11-6.31a2 2 0 0 0-2.3-1.77H6.91A1.5 1.5 0 0 0 5.55 6.9C5 14.59 9.29 22.82 10.16 24.4h0v.06l.12.23h0a35.44 35.44 0 0 0 13 13h0l.44.25h0c2 1.06 9.95 5.06 17.38 4.51a1.5 1.5 0 0 0 1.39-1.36v-8.51a2 2 0 0 0-1.77-2.3Z"
          /></svg
        >
        <p>(31)0000-0000</p>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 28 28"
          ><path
            fill="currentColor"
            d="M6.25 5h15.5a3.25 3.25 0 0 1 3.245 3.066L25 8.25v11.5a3.25 3.25 0 0 1-3.066 3.245L21.75 23H6.25a3.25 3.25 0 0 1-3.245-3.066L3 19.75V8.25a3.25 3.25 0 0 1 3.066-3.245L6.25 5h15.5h-15.5Zm17.25 5.905l-9.154 4.76a.75.75 0 0 1-.58.047l-.112-.047l-9.154-4.76v8.845a1.75 1.75 0 0 0 1.606 1.744l.144.006h15.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-8.845ZM21.75 6.5H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 8.25v.964l9.5 4.94l9.5-4.94V8.25a1.75 1.75 0 0 0-1.607-1.744L21.75 6.5Z"
          /></svg
        >
        <p>email@email.com</p>
      </div>

    </div>

    <div class="form">
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Telefone" bind:value={resultado} on:input={MascaraTelefone} id="telefone" maxlength="14"/>
      <input type="text" placeholder="E-mail" />
      <textarea type="text" placeholder="Menssagem" />
      <button>Enviar</button>
    </div>
</main>

<style>
  main {
    min-height: calc(100vh - 86px);
    padding-top: 3rem;
    background: #303446;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  h1 {
    color: #cdd6f4;
    text-align: center;
    font-size: 3rem;
  }
  .cards{
    width: 100%;
    display: flex;
    max-width: 900px;
    gap: 5rem;
  }
  .cards>div {
    background: #292c3c;
    box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.4);
    border-radius: 25px;
    color: #cdd6f4;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
  }
  .cards svg{
    height: 2rem;
  }
  .cards p{margin: 0;}
  
  .form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    width: 100%;
  }
  .form>input{
    border-radius: 10px;
    padding: .5rem;
    font-size: 1.2rem;
    background-color: #737994;
  }
  .form > *{
    outline: none;
    border: none;
    color: #cdd6f4;
  }
  .form>input::placeholder{
    color: #cdd6f4;
  }
  .form>textarea{
    border-radius: 10px;
    padding: .5rem;
    font-size: 1.2rem;
    background-color: #737994;
    min-height: 10rem;
    resize: none;
  }
  .form>textarea::placeholder{
    color: #cdd6f4;
  }
  .form>button{
    color: #cdd6f4;
    align-self: center;
    padding: 1rem;
    padding-inline: 2rem;
    border-radius: 10px;
    background-color: #737994;
  }
  :global(.dark) main {
    background-color: #1e1e2e;
  }
  :global(.light) main {
    background-color: #cdd6f4;
  }
  :global(.light) h1{
    color: #1e1e2e;
  }
  :global(.light) .cards{
    color: #737994;
  }
  @media(max-width:1200px){
    .cards{
      display: flex;   
      flex-direction: column;
      text-align: center;
      max-width: 250px;
      gap: 2.5rem;
    }
    .form{
    max-width: 380px;
  }
  }
</style>
