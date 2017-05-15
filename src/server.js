// koa - node.js фреймворк на базе которого запускается сервер
// koa-router - маршрутизация на сервере
// graphql-server-koa модуль связки, чтобы подружить Koa и GraphQL
import koa from 'koa'; // koa@2
import koaRouter from 'koa-router'; // koa-router@next
import koaBody from 'koa-bodyparser'; // koa-bodyparser@next
import {graphqlKoa, graphiqlKoa} from 'graphql-server-koa';
// знакомство с schema ждет нас впереди
// db.js - файл отвечающий за подключение к MongoDB
import schema from './data/schema'
import './db'
const app = new koa();
const router = new koaRouter();
const PORT = 3000;

// koaBody is needed just for POST.
app.use(koaBody());

// POST и GET запросы будут перенаправляться в схему GraphQL
router.post('/graphql', graphqlKoa({schema: schema}));
router.get('/graphql', graphqlKoa({schema: schema}));

// инструмент для тестирования запросов localhost:3000/graphiql
router.get('/graphiql', graphiqlKoa({endpointURL: '/graphql'}));
app.use(router.routes());
app.use(router.allowedMethods());

// запуск сервера
app.listen(PORT, () => {
	console.log('Server is running on', 'localhost:' + PORT);
	console.log('GraphiQL dashboard', 'localhost:' + PORT + '/graphiql');
});