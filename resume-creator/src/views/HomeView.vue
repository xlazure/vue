<script setup>
</script>

<template>
  <main>
    <h1>Your Resume<br />Wizzard</h1>
    <a href="/creator" target="_self">
      <button>
        Create for free
      </button>
    </a>
  </main>
  <footer>

  </footer>
</template>


<style scoped>
main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 5em;

  & h1 {
    font-size: clamp(8.125rem, 5.9821rem + 3.3482vw, 10rem);
    font-weight: 700;
    line-height: unset;
  }

  & button {
    border-radius: 8px;
    padding: 1.25rem;
    font-size: clamp(3rem, 1.8571rem + 1.7857vw, 4rem);
    background-color: var(--primary-bgcolor);
    color: var(--primary-color);
    border-width: 8px;
  }
}

footer {
  height: 200px;
  background-color:var(--secondary-bgcolor);
}
</style>