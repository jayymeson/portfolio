<template>
  <div id="about" class="profile-container">
    <div class="profile-info">
      <!-- Informações do perfil aqui -->
      <h1>
        Hi 👋, My name is <span class="gradient-text">Jaymeson. </span>I build
        things for the web, specializing in Nodejs Backend.
      </h1>
    </div>
    <div class="profile-image">
      <!-- Imagem do perfil aqui -->
      <!-- <img src="@/assets/jaymeson.png" alt="Jaymeson" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAbout",
  mounted() {
    // Use o próximo tick para garantir que a página esteja renderizada
    this.$nextTick(() => {
      const element = document.getElementById("about");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  height: 350px; /* Altura total do componente */
  padding-top: 19px; /* Espaço no topo do componente */
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza os itens verticalmente */
  gap: 219px; /* Espaço entre a div de informações e a imagem */
}

.profile-info {
  padding: 19px 0; /* Aplica o espaço no topo e fundo do contêiner de informações */
  /* Outros estilos, se necessário */
}

.profile-info > h1 {
  /* Estilos específicos para o cabeçalho */
  box-sizing: border-box; /* Garante que o padding não adicione largura extra */
  color: var(--Solid-Heading, #42446e);
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  width: 636px; /* Ou 100% se quiser que ele ocupe todo o espaço horizontal disponível */
  height: 297px;
  /* Resto do seu CSS */
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

.profile-image {
  /* Estilos para a div da imagem */
  width: 349px; /* Largura da imagem */
  height: 349px; /* Altura da imagem */
  border-radius: 50%; /* Para torná-la um círculo */
  border: 9px solid #e70faa; /* Borda rosa */
  /* Garanta que a imagem de fundo esteja centralizada e cubra toda a área */
  background: url("@/assets/jaymeson.png") no-repeat center center;
  background-size: cover;
  overflow: hidden; /* Esconde o excesso da imagem */
}
</style>
