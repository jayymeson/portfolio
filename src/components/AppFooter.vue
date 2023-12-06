<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-top">
        <AppLogo />
        <div class="contact-info">
          <p>+55 84 98773-9980</p>
          <p>jaymesonmendes@gmail.com</p>
        </div>
        <ul class="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/jaymesonmendes/"
              target="_blank"
            >
              <img src="@/assets/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/jayymeson" target="_blank">
              <img src="@/assets/github.png" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/jayymeson/" target="_blank">
              <img src="@/assets/instagram.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1211"
        height="3"
        viewBox="0 0 1211 3"
        fill="none"
      >
        <path
          opacity="0.3"
          d="M1 1.84112H1210"
          stroke="#666666"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
      <nav class="footer-nav">
        <ul>
          <router-link to="#home" class="nav-link" @click="scrollToSection"
            >Home</router-link
          >
          <router-link to="/#about" class="nav-link" @click="scrollToSection"
            >About</router-link
          >
          <router-link
            to="#tech-stack"
            class="nav-link"
            @click="scrollToSection"
            >Tech Stack</router-link
          >
          <li><a href="#contact">Contact</a></li>
          <li><a href="#experiences">Experiences</a></li>
          <p class="credit-text">
            Built by <span class="gradient-text">Jaymeson Mendes </span> with
            love & redbull
          </p>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  name: "AppFooter",
  components: {
    AppLogo,
  },
};
</script>

<style scoped>
.footer {
  /* background-color: #333; */
  /* color: white; */
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-size: 1rem;
}

.gradient-text {
  background: linear-gradient(
    45deg,
    #00c0fd,
    #e70faa
  ); /* Cores do seu gradiente */
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Isso é necessário se você não estiver usando o prefixo -webkit- */
  -webkit-text-fill-color: transparent; /* Especificamente para o Safari */
}

.footer-top {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.social-links {
  justify-self: end;
  /* Estilos existentes para social-links */
}

.social-links {
  justify-self: end;
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
}

.social-links li a img {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-links li a img:hover {
  opacity: 0.7;
}

.footer-nav {
  width: 100%;
  padding: 1rem 0;
}

.footer-nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 40px;
  align-items: center;
}

.contact-info {
  display: flex;
  gap: 30px;
}

.footer-nav ul li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.credit-text {
  text-align: right;
  margin-left: auto; /* Isso empurrará o texto para a direita */
}

.footer-nav ul li a:hover {
  color: #00c0fd;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-info,
  .social-links,
  .footer-nav {
    order: -1;
  }

  .footer-nav ul {
    flex-direction: column;
    align-items: center;
  }

  .footer-nav,
  .credit-text {
    width: 100%;
    order: 2;
  }

  .credit-text {
    order: 1;
    margin-top: 1rem; /* Espaço entre os elementos depois do reorder */
  }
}
</style>
