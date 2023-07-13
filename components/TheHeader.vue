<template>
  <nav>
    <p class="page-title">Oliver Larsson</p>
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
      |
      <a href="https://www.larssonoliver.com">Portfolio</a>
      |
      <a href="https://github.com/LarssonOliver">GitHub</a>
      |
      <a href="https://www.linkedin.com/in/larssonoliver">LinkedIn</a>
    </div>
    <hr />
  </nav>
</template>

<style scoped>
nav {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
  text-align: center;
  font-family: "Source Code Pro", "Courier New", Courier, monospace;
}

.page-title {
  font-weight: 600;
  font-size: 1.25em;
  margin-bottom: .5em;
}

.navigation {
  font-weight: 300;
}

a {
  padding: .25em;
}

hr {
  margin-top: 1em;
}
</style>

