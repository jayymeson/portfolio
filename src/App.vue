<template>
  <AppHeader />
  <AppAbout />
  <AppTechStacks />
  <AppProjects />
  <AppExperiences />
  <AppEducation />
  <AppFooter />
  <router-view />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppAbout from "./components/AppAbout.vue";
import AppTechStacks from "./components/AppTechStacks.vue";
import AppProjects from "./components/AppProjects.vue";
import AppFooter from "./components/AppFooter.vue";
import AppExperiences from "./components/AppExperiences.vue";
import AppEducation from "./components/AppEducation.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppAbout,
    AppTechStacks,
    AppProjects,
    AppExperiences,
    AppEducation,
    AppFooter,
  },
  mounted() {
    // Verifica se a rota atual é a raiz e faz scroll para a seção About
    if (this.$route.path === "/") {
      this.scrollToAbout();
    }
  },
  methods: {
    scrollToAbout() {
      // Use o próximo tick para garantir que a página esteja renderizada
      this.$nextTick(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  max-width: 1600px;
  width: 100%;
}

.header {
  margin-bottom: 120px;
}

#about {
  margin-bottom: 120px; /* Ajuste este valor conforme necessário */
}
</style>
