/* Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница. */

const http = require("http");
const headersObject = { "Content-Type": "text/html;charset=UTF-8" };
let counterMainPage = 0;
let counterAboutPage = 0;
const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.writeHead(200, headersObject);
      response.end(
        `<h1>Корневая страница</h1><p>Просмотров текущей страницы: ${++counterMainPage}</p><a href="/about">Ссылка на страницу /about</a>`
      );
      break;
    case "/about":
      response.writeHead(200, headersObject);
      response.end(
        `<h1>Страница about</h1><p>Просмотров текущей страницы: ${++counterAboutPage}</p><a href="/">Ссылка на главную страницу /</a>`
      );
      break;
    default:
      response.writeHead(404, headersObject);
      response.end(
        `<h1>Такой страницы у нас нет, но вы можете посетить другие по ссылкам внизу</h1><a href="/">Ссылка на главную страницу /</a><br><a href="/about">Ссылка на страницу /about</a>`
      );
  }
});

server.listen(3000);
