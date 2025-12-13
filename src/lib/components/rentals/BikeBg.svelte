<script>
  export let variant = "top"; // "top", "middle", "bottom"
  export let desktop = false;

  const rotation = {
    top: "-10deg",
    middle: "25deg",
    bottom: "-25deg"
  };
</script>

<div
  class={`pointer-events-none absolute left-0 w-full flex justify-center opacity-10 ${
		desktop ? "-top-40 -z-10" : ""
	}`}
  style={`transform: rotate(${rotation[variant]}); ${desktop ? "" : "top:0;"}`}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 217" width="350" height="217" fill="#2d68b2">
    <!-- CAŁE SVG roweru → identyczne jak Twoje, wklej tylko raz -->
    <!-- (pominąłem tu dla skrócenia, ale wklej cały jeden raz) -->
  </svg>
</div>
