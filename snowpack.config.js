module.exports = {
  mount: {
    public: {url: "/", static: true},
    src: "/dist",
  },
  devOptions: {open: "none", port: 3030},
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-sass",
  ],
};