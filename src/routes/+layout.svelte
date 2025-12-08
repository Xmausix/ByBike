<script>
    import '../app.css';
    import { page } from '$app/state';
    //import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { browser } from '$app/environment';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    import Hero from '$lib/components/Hero.svelte';
    import { initI18n } from '$lib/i18n/locales/i18n.js';
    import { isLoading,locale } from 'svelte-i18n';
    import { infoStore } from '$lib/stores/infoStore.js';

    // if (browser) {
    // 	injectSpeedInsights();
    // }

    let { children,data } = $props();
    let lang = page.params.lang || 'en';

    // DODAJ: Fallback dla data.info
    const safeInfo = data?.info || {
        phone: '+48 123 456 789',
        whatsAppNr: '+48 123 456 789',
        addressComp: 'Kraków, Rynek Główny 1',
        openHour: '9:00 - 17:00',
        nipVat: '1234567890',
        bankInfo: 'Bank: 1234 5678 9012 3456',
        addressFund: 'Kraków, ul. Fundacyjna 1',
        mapLocation: ''
    };

    // Użyj safeInfo zamiast data.info
    infoStore.setInfo(safeInfo);
    initI18n(lang);
</script>

<svelte:head>
    <title>Gdańsk by Bike</title>
    <meta
            name="description"
            content="Gdańsk by Bike – wycieczki rowerowe z przewodnikiem po Gdańsku i okolicach. Rezerwuj online!"
    />

    <link rel="preconnect" href="https://fra.cloud.appwrite.io" crossorigin />
    <link
            rel="preload"
            as="image"
            href="/hero1768.avif"
            type="image/avif"
            media="(max-width: 768px)"
    />
    <link
            rel="preload"
            as="image"
            href="/hero11280.avif"
            type="image/avif"
            media="(min-width: 769px)"
    />
</svelte:head>

{#if $isLoading}
    <div class="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
    </div>
{:else}
    <Header />

    <main class="min-h-[80vh]">
        <div class="mx-auto w-full max-w-7xl">
            {#if children}
                {@render children()}
            {:else}
                <p>fallback content</p>
            {/if}
        </div>
    </main>

    <section class="relative">
        <!-- UŻYJ safeInfo ZAMIAST data.info -->
        <Footer info={safeInfo} />
    </section>
{/if}