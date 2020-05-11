module.exports = (app) => {
  // Default
  app.get("/", (req, res) => {
    res.json({ Hello: "Welcome to Social-One" });
  });
}