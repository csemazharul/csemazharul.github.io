<script>
  import { links } from './data.js';
</script>

<section id="contact" class="contact">
  <h2><span class="n">03</span> Contact</h2>
  <p class="lead">Open to remote work worldwide. I reply within two working days.</p>
  <ul>
    {#each links as l}
      <li>
        <span class="label">{l.label}</span>
        <a href={l.href} target="_blank" rel="noopener">{l.text}</a>
        <span class="arr">↗</span>
      </li>
    {/each}
  </ul>
</section>
