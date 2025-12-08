<script>
    let { tour } = $props();
    let videoEl;
    let iframeEl;
    let iframeContainer;
    
    function toggleMute() {
        if (videoEl) videoEl.muted = !videoEl.muted;
    }
    
    function handleIframeLoad() {
        if (iframeEl) {
            try {
                // Spróbuj uzyskać rzeczywistą wysokość zawartości iframe
                const iframeDoc = iframeEl.contentDocument || iframeEl.contentWindow.document;
                const body = iframeDoc.body;
                const html = iframeDoc.documentElement;
                
                // Znajdź rzeczywistą wysokość zawartości
                const actualHeight = Math.max(
                    body.scrollHeight,
                    body.offsetHeight,
                    html.clientHeight,
                    html.scrollHeight,
                    html.offsetHeight
                );
                
                // Ustaw wysokość iframe na rzeczywistą wysokość zawartości
                iframeEl.style.height = actualHeight + 'px';
                
                console.log(`Iframe content height: ${actualHeight}px`);
                
            } catch (error) {
                console.log('Cannot access iframe content (CORS), using fallback height');
                // Fallback - większa wysokość na wypadek wielu wycieczek
                iframeEl.style.height = '1200px';
            }
        }
    }
</script>

<div class="max-w-7xl mx-auto mb-10 grid grid-cols-[1fr_1.75fr_1.5fr] gap-3">
    <!-- WIDEO -->
    <div class="overflow-hidden rounded-bl-[30px] rounded-tl-[30px] h-[400px] w-[300px]">
        <video
            bind:this={videoEl}
            autoplay
            muted
            loop
            playsinline
            onclick={toggleMute}
            class="w-full h-full object-cover"
        >
            <source src="/film.mov" type="video/mp4" />
        </video>
    </div>

    <!-- ZDJĘCIE -->
    <div class="overflow-hidden h-[400px]">
        <img src={tour.gallery[0]} alt={tour.name} class="w-full h-full object-cover" />
    </div>

    <!-- KALENDARZ -->
    <div bind:this={iframeContainer} class="h-[400px] bg-gray-100 text-center relative ml-12 rounded-br-[30px] rounded-tr-[30px]">
        <div class="h-full overflow-y-auto overflow-x-hidden">
            <iframe 
                bind:this={iframeEl}
                src={tour.fareHarborUrl}
                width="100%" 
                height="800"
                frameborder="0"
                scrolling="no"
                title="Kalendarz wycieczek"
                class="border-0"
                onload={handleIframeLoad}>
            </iframe>
        </div>
    </div>
</div>
