<script>
  import Nav from '$lib/Nav.svelte';
  import Hero from '$lib/Hero.svelte';
  import Skills from '$lib/Skills.svelte';
  import Projects from '$lib/Projects.svelte';
  import Contact from '$lib/Contact.svelte';

  const year = new Date().getFullYear();
</script>

<svelte:head>
  <title>Md. Mazharul Islam — Software Engineer</title>
</svelte:head>

<Nav />

<div class="wrap" id="top">
  <Hero />
  <Skills />
  <Projects />
  <Contact />

  <footer>
    <span>© {year} Md. Mazharul Islam</span>
  </footer>
</div>
