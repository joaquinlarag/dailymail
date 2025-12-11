module.exports = {
  proxy: "http://localhost:8888/nomemiren/",
  files: [
    {
      match: ["assets/css/*.css"],
      fn: function (event, file) {
        const bs = require("browser-sync").get("bs-instance");
        bs.reload("*.css");
      }
    },
    "assets/scss/**/*.scss",
    "assets/js/**/*.js",
    "**/*.php"
  ],
  injectChanges: true,
  open: false,
  notify: false,
  reloadOnRestart: true,
  ui: false,
  ghostMode: false,
  port: 3000,
  watchEvents: ["change"],
  watchOptions: {
    ignoreInitial: true
  }
};
