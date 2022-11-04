<script>
    import Logo from "../img/logo.svg"
</script>

<header>
    <img src={Logo} alt="Logo">
    <a href="#">Lorem</a>
    <a href="#">ipsum</a>
    <a href="#">dolor</a>
    <a href="#">sit amet</a>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap');
    header{
        background-color: #1E1E2E;
        padding: 1rem;
        padding-inline: 4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        font-family: 'Source Serif Pro',serif;
    }
    img{
        height: 3rem;
        width: 4.5rem;
        margin-right: auto;
    }
    a{
        color: #CDD6F4;
        text-decoration: none;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 600px){
        a{
            display: none;
        }
    }
</style>