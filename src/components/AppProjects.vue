<template>
  <div id="projects" class="projects-container">
    <h2>Projects</h2>
    <p>Things I've built so far</p>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <a
          :href="project.previewLink"
          target="_blank"
          class="project-image-link"
        >
          <img :src="project.image" alt="Project image" class="project-image" />
        </a>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">{{ project.techStack.join(", ") }}</div>
        <div class="project-actions">
          <a :href="project.previewLink" target="_blank">
            <img src="@/assets/www.png" alt="Preview Link" class="icon" />
            Live Preview
          </a>
          <a :href="project.codeLink" target="_blank">
            <img src="@/assets/github.png" alt="View Code" class="icon" />
            View Code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProjects",
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    try {
      const response = await fetch("/projects.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.projects = await response.json();
    } catch (error) {
      console.error("Could not load projects:", error);
    }
  },
};
</script>

<style scoped>
.projects-container {
  text-align: center;
  padding: 50px 0;
}
.icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 8px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  padding: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* This will distribute space between the items */
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: 0.3s;
  margin: 16px;
  width: 373px;
  height: 650px;
  position: relative; /* To position the actions at the bottom */
}

.project-card:hover {
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2); /* Sombra mais escura ao passar o mouse */
}

.project-image-link {
  display: block; /* Faz com que a tag 'a' se comporte como um bloco, adequado para envolver imagens */
  width: 100%; /* Certifique-se de que a tag 'a' ocupe toda a largura do card */
  border-top-left-radius: 20px; /* Mantenha o raio da borda se a imagem também o tiver */
  border-top-right-radius: 20px; /* Mantenha o raio da borda se a imagem também o tiver */
  overflow: hidden; /* Garante que o conteúdo não vaze fora do raio da borda */
}

.project-image {
  width: 375px;
  height: 260px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.project-image-link:hover .project-image {
  transform: scale(1.05); /* Efeito de zoom leve ao passar o mouse */
}

/* Estilos adicionais para o texto e ações do projeto */
.project-card h3 {
  font-size: 22px; /* Exemplo de tamanho da fonte, ajuste conforme necessário */
  margin: 16px; /* Espaço ao redor do título */
}

.project-card p {
  font-size: 22px;
  align-items: center;
  box-sizing: border-box;
  width: 314px;
  align-self: center;
}

.project-content {
  padding: 16px;
  flex-grow: 1; /* This will make the content grow to fill the space */
}

.project-actions {
  padding: 10px;
  text-align: center; /* Center the action links */
  box-sizing: border-box;
}

.project-actions a {
  display: inline-block; /* Necessary for padding and margins */
  padding: 8px 16px;
  margin: 0 8px; /* Give some space between the buttons */
  text-decoration: none;
  color: #42446e;
  font-size: 16px;
  transition: background-color 0.3s ease; /* Smooth background color transition */
}

.project-actions a:hover {
  background-color: #ddd; /* Darker background on hover */
  border-radius: 8px;
}

.tech-stack {
  font-size: 16px;
  color: #42446e;
  margin: 16px;
}
</style>
