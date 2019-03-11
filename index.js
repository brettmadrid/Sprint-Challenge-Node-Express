const server = require('./server.js');

const PORT = 9090;

// we can now use that port, if set up by heroku or read from .env or 5000 as a default if not set
server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
