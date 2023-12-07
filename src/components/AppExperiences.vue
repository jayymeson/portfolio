<template>
  <div id="profile" class="experiences-container">
    <h2 class="experiences-title">Work Experiences</h2>
    <div
      class="experience-card"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <div class="experience-details">
        <h3 class="experience-title">{{ experience.title }}</h3>
        <div class="experience-info">
          <img
            src="@/assets/empresa.png"
            alt="Company icon"
            class="icon company-icon"
          />
          <p class="company-name">{{ experience.company }}</p>
          <img
            src="@/assets/localizacao.png"
            alt="Location icon"
            class="icon location-icon"
          />
          <span class="location-name">{{ experience.location }}</span>
        </div>
      </div>
      <div class="experience-type-container">
        <span class="experience-type">{{ experience.type }}</span>
        <div class="date-container">
          <img src="@/assets/data.png" alt="Date icon" class="icon date-icon" />
          <time class="date-period">{{ experience.period }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppExperiences",
  data() {
    return {
      experiences: [], // Load this from your JSON data
    };
  },
  async created() {
    try {
      const response = await fetch("/experiences.json");
      this.experiences = await response.json();
    } catch (error) {
      console.error("Could not load experiences:", error);
    }
  },
};
</script>

<style scoped>
.experiences-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 0 20px;
}

.experiences-title {
  color: var(--Solid-Heading, #42446e);
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
  letter-spacing: -0.4px;
  text-align: center;
  margin-bottom: 2rem;
}

.experience-card {
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.experience-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.experience-title {
  color: var(--dark-content, #666);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-right: 120px;
  margin-top: 0;
}

.experience-type-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
}

.experience-type {
  background-color: #d7ffe0;
  color: #018c0f;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

.experience-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: var(--light-Content, #a7a7a7);
  font-style: normal;
  font-weight: 500;
}

.date-container {
  display: flex;
  gap: 16px;
}

.company-icon,
.location-icon,
.date-icon {
  width: 20px;
  height: 20px;
}

.company-name,
.location-name {
  font-size: 16px;
  color: #666;
}

.date-period {
  font-size: 16px;
  color: #666;
}

@media (max-width: 768px) {
  .experiences-container {
    max-width: 100%;
    margin: 20px auto;
  }

  .experience-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .experience-type-container {
    align-items: center;
  }

  .date-container {
    align-items: center;
  }
}
</style>
