// vue.config.js
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Jaymeson Mendes'; // O título que você quer
        return args;
      });
  }
}
