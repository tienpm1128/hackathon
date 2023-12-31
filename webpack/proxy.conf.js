function setupProxy() {
  const tls = process.env.TLS;
  const conf = [
    {
      context: [],
      target: `http${tls ? 's' : ''}://localhost:8080`,
      secure: false,
      changeOrigin: tls,
    },
  ];
  return conf;
}

module.exports = setupProxy();
