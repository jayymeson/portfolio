<template>
  <div id="tech-stack" class="tech-stack-container">
    <h1>My Tech Stack</h1>
    <p>Technologies I've been working with recently</p>
    <div class="tech-icons">
      <img
        align="center"
        alt="Jay-Js"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
      />
      <img
        align="center"
        alt="Jay-Ts"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"
      />
      <img
        align="center"
        alt="Jay-Nest"
        height="30"
        width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
      />
      <img
        align="center"
        alt="Jay-Express"
        height="30"
        width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      />
      <img
        align="center"
        alt="Jay-Postgres"
        height="30"
        width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
      />
      <img
        align="center"
        alt="Jay-MongoDB"
        height="30"
        width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
      />
      <img
        align="center"
        alt="Jay-Docker"
        height="30"
        width="40"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      />
      <img
        align="center"
        alt="Jay-Rabbitmq"
        height="30"
        width="40"
        src="https://i.imgur.com/2zxaILn.png"
      />
      <img
        align="center"
        alt="Jay-Jest"
        height="30"
        width="40"
        src="https://i.imgur.com/7FVDtC3.png"
      />
      <img
        align="center"
        alt="Jay-Microservice"
        height="30"
        width="40"
        src="https://i.imgur.com/iCFQmQA.png"
      />
      <img
        align="center"
        alt="Jay-CI/CD"
        height="30"
        width="40"
        src="https://i.imgur.com/Lnvh28s.png"
      />
      <img
        align="center"
        alt="Jay-Vue"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vuejs/vuejs-original.svg"
      />
      <img
        align="center"
        alt="Jay-React"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      />
      <img
        align="center"
        alt="Jay-HTML"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      />
      <img
        align="center"
        alt="Jay-CSS"
        height="30"
        width="40"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTechStack",
};
</script>

<style scoped>
.tech-stack-container h1 {
  color: #42446e;
}
.tech-stack-container {
  text-align: center;
  padding-top: 100px; /* Ajuste para o espaço acima da seção Tech Stack */
  padding-bottom: 50px; /* Ajuste para o espaço abaixo da seção Tech Stack */
}

.tech-icons {
  display: grid;
  grid-template-columns: repeat(
    5,
    auto
  ); /* ajuste para que os itens fiquem apenas com o espaço necessário */
  justify-content: center; /* Isso vai centralizar o grid na horizontal dentro do seu container */
  gap: 10px; /* Isso vai aplicar um espaço de 10px entre as linhas e colunas */
  margin-top: 100px;
}

.tech-icons img {
  margin: 0 50px; /* Isso aplica uma margem horizontal de 5px em cada lado do ícone */
  width: auto; /* Isso permite que o ícone mantenha sua proporção original */
  height: 50px; /* Altura fixa para todos os ícones */
}
</style>
