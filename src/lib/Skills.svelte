<script>
  import { skills } from './data.js';
</script>

<section id="skills">
  <h2><span class="n">01</span> Skills</h2>
  <p class="lead">Languages, frameworks, and practices I use daily.</p>
  <div class="skills">
    {#each skills as skill}
      <span>{skill}</span>
    {/each}
  </div>
</section>
