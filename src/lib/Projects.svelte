<script>
  import { projects } from './data.js';
</script>

<section id="projects">
  <h2><span class="n">02</span> Projects</h2>
  <p class="lead">A selection of production work built end-to-end.</p>
  {#each projects as p}
    <a class="proj" href={p.href} target="_blank" rel="noopener">
      <div class="top">
        <span class="kind">{p.kind}</span>
      </div>
      <h3>{p.name} <span class="arr">↗</span></h3>
      <p>{p.desc}</p>
    </a>
  {/each}
</section>
