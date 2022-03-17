const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/https://newsapi.org/v2/top-headlines?country=in&apiKey=5102124e3da246c9a8d06bd7ffffeb54',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};