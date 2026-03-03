const fileHandler = require('./utils/fileHandler');

function handleRequest(req, res) {

    switch (req.url) {
        case '/':
        case '/home':
            fileHandler.serveFile('pages/home.html', 'text/html', res);
            break;

        case '/about':
            fileHandler.serveFile('pages/about.html', 'text/html', res);
            break;

        case '/contact':
            fileHandler.serveFile('pages/contact.html', 'text/html', res);
            break;

        case '/style.css':
            fileHandler.serveFile('public/style.css', 'text/css', res);
            break;

        default:
            fileHandler.serveFile('pages/404.html', 'text/html', res, 404);
            break;
    }
}

module.exports = { handleRequest };