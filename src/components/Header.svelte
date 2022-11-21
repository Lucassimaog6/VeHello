<script>
    // Drawer
    import Drawer from 'svelte-drawer-component'
	let open = false

    // Light/Dark mode
    import { ThemeMode } from '../store.js';
    $: document.body.className = $ThemeMode;

    // Icone
    import Icon from '@iconify/svelte';

    // Links
    import { Router, Link } from "svelte-navigator";

    import Logo from "./assets/logo.svg"

    const SwapTheme = () => ThemeMode.set($ThemeMode === "light" ? "dark" : "light")
</script>


<Router>
    <header>
        <div id="Logo"><Link to="/"><img src={Logo} alt="Logo"></Link></div>
        <button class="mobile" on:click={() => open = true}>
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"/></svg>
        </button>
        
        <Drawer { open } size='100vw' >
            <div class="header">
                <div class="ThemeSwitcher" on:click={SwapTheme}>
                    {#if $ThemeMode === "dark"}
                    <Icon icon="ic:round-light-mode" color="#cdd6f4" width="2rem" />
                    {:else}
                    <Icon icon="ic:round-dark-mode" color="#1E1E2E" width="2rem" />
                    {/if}
                </div>
                <a class="closeButton" on:click={() => open = false}><Icon icon="majesticons:close" width="3rem"/></a>
            </div>
            <Link to="/produto">Produto</Link>
            <Link to="/contato">Contato</Link>
        </Drawer>

        <Link to="/produto">Produto</Link>
        <Link to="/contato">Contato</Link>
        <div class="ThemeSwitcher" on:click={SwapTheme}>
            {#if $ThemeMode === "dark"}
                <Icon icon="ic:round-light-mode" color="#cdd6f4" width="2rem" />
            {:else}
                <Icon icon="ic:round-dark-mode" color="#1E1E2E" width="2rem" />
            {/if}
        </div>
    </header>
</Router>

<style>
    header{
        padding: 1rem;
        padding-inline: 4rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        transition: background-color 300ms;
    }
    #Logo{
        margin-right: auto;
    }
    :global(a) img{
        height: 3rem;
        width: 4.5rem;
    }
    :global(a){
        color: #CDD6F4;
        text-decoration: none;
        font-size: 1.2rem;
        transition: color 300ms;
    }
    :global(.dark) header{
        background-color: #1E1E2E;
    }
    :global(.light) header{
        background-color: #CDD6F4;
    }
    :global(.dark a){
        color: #CDD6F4;
    }
    :global(.light a){
        color: #1E1E2E;
    }
    
    :global(.dark .mobile path){
        fill: #CDD6F4;
        stroke: #CDD6F4;
    }
    :global(.light .mobile path){
        fill: #1E1E2E;
        stroke: #1E1E2E;
    }

    .mobile{
        background-color: transparent;
        border: none;
        display: none;
    }

    .mobile svg{
        height: 2rem;
        width: 2rem;
    }

    :global(.panel){
        background: #CDD6F455 !important;
        backdrop-filter: blur(1.2rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    :global(.panel) .header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
    }

    @media screen and (max-width: 600px){
        .mobile{
            display: block;
        }

        :global(a), :global(.ThemeSwitcher){
            display: none;
        }

        :global(#Logo a){
            display: block;
        }

        :global(.panel a), :global(.panel .ThemeSwitcher){
            display: block;
        }
    }
</style>