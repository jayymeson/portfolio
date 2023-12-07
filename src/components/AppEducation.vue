<template>
  <div class="education-container">
    <h2 class="education-h2">Education</h2>
    <div
      class="education-card"
      v-for="education in education"
      :key="education.id"
    >
      <div class="education-details">
        <h3 class="education-title">{{ education.title }}</h3>
        <div class="education-info">
          <img
            src="@/assets/empresa.png"
            alt="institution icon"
            class="icon institution-icon"
          />
          <p class="institution-name">{{ education.institution }}</p>
          <img
            src="@/assets/localizacao.png"
            alt="Location icon"
            class="icon location-icon"
          />
          <span class="location-name">{{ education.location }}</span>
        </div>
      </div>
      <div class="education-type-container">
        <span class="education-type">{{ education.type }}</span>
        <div class="date-container">
          <img src="@/assets/data.png" alt="Date icon" class="icon date-icon" />
          <time class="date-period">{{ education.period }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppEducation",
  data() {
    return {
      education: [], // Load this from your JSON data
    };
  },
  async created() {
    try {
      const response = await fetch("/education.json");
      this.education = await response.json();
    } catch (error) {
      console.error("Could not load education:", error);
    }
  },
};
</script>

<style scoped>
.education-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 0 20px;
}

.education-h2 {
  color: var(--Solid-Heading, #42446e);
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -0.4px;
  text-align: center;
  margin-bottom: 2rem;
}

.education-card {
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.education-details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.education-title {
  color: var(--dark-content, #666);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-right: 200px;
  margin-top: 0;
}

.education-type-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
}

.education-type {
  background-color: #d7ffe0;
  color: #018c0f;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 14px;
  margin-bottom: 10px;
}

.education-info {
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

.institution-icon,
.location-icon,
.date-icon {
  width: 20px;
  height: 20px;
}

.institution-name,
.location-name {
  font-size: 16px;
  color: #666;
}

.date-period {
  font-size: 16px;
  color: #666;
}

@media (max-width: 768px) {
  .education-container {
    max-width: 100%;
    margin: 20px auto;
  }

  .education-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .education-type-container {
    align-items: center;
  }

  .date-container {
    align-items: center;
  }
}
</style>
