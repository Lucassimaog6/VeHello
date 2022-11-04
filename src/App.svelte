<script>
  import Logo from "./img/logo.svg"
  import Header from "./components/Header.svelte"
  import Main from "./components/Main.svelte"
</script>

<svelte:head> // Local onde modificamos o "head" do site!
  <title>Vehello</title>

  // Favicon do site
  <link rel="shortcut icon" href={Logo} type="image/x-icon">
</svelte:head>

<main>
  <Header />
  <Main />
</main>