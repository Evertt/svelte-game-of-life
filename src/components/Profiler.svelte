<script lang="ts">
  import { toCssProps } from "lib/utils";

  export let frames = 0;
  export let isPlaying = false;
  let tID, frameRate = 0;

  const setFrameRate = () => (frameRate = frames) && (frames = 0)
  const monitorFrameRate = () => tID = setInterval(setFrameRate, 1000)
  const stopMonitoring = () => (frameRate = 0) || clearInterval(tID)
  
  $: isPlaying ? monitorFrameRate() : stopMonitoring()
  $: color = frameRate < 24 ? "crimson" : frameRate < 48 ? "orange" : "darkgreen";
  $: opacity = Number(Boolean(frameRate));
  $: style = toCssProps({ color, opacity });
</script>

<div {style}>{frameRate}fps</div>

<style>
  div {
    margin: 1em;
    background: var(--color);
    border-radius: 1rem;
    color: white;
    width: 4em;
    text-align: center;
    transition: background 0.3s ease-in;
    height: 2.125em;
    width: 4.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    text-shadow: 0.1em 0.1em 0.1em #333;
    opacity: var(--opacity);
  }
</style>
