<template>
  <header class="header">
    <AppLogo class="logo" />
    <nav class="navigation">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link :to="{ name: 'About', hash: '#about' }" class="nav-link"
        >About</router-link
      >
      <router-link to="/tech-stack" class="nav-link">Tech Stack</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
    <ul class="social-links">
      <li>
        <a href="https://www.linkedin.com/in/jaymesonmendes/" target="_blank">
          <img
            src="@/assets/linkedin.png"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/jayymeson" target="_blank">
          <img src="@/assets/github.png" alt="GitHub" width="30" height="30" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/jayymeson/" target="_blank">
          <img
            src="@/assets/instagram.png"
            alt="Instagram"
            width="30"
            height="30"
          />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  name: "AppHeader",
  components: {
    AppLogo,
  },
};
</script>

<style scoped>
.header {
  display: inline-flex;
  align-items: flex-start;
  gap: 179px;
  height: 59px;
  margin-top: 41px;
}

.logo {
  width: 70px;
  height: 70px;
}

.navigation {
  display: flex;
  gap: 60px; /* Ajuste o espaçamento conforme necessário */
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1rem;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 10px;
}

.social-links li {
  width: 30px;
  height: 30px;
}
</style>
