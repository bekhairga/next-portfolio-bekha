const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
app.prepare().then(() => {
	const server = express();
	const PORT = process.env.PORT || 3000;

	server.all('*', (req, res) => {
		return handle(req, res);
	});

	server.listen(PORT, (err) => {
		if (err) {
			console.error(err);
		}
		console.log(`Working on port ${PORT}`);
	});
});
