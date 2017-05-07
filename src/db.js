import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
// если подключение к БД успешно, то в консоле увидим: 
// 'Connected to mongo server.'
mongoose.connection.on('open', function (ref) {
	console.log('Connected to mongo server.');
});
// если сервер не может подключится к БД, то выведет сообщение: 
// 'Could not connect to mongo server!' + ошибки
mongoose.connection.on('error', function (err) {
	console.log('Could not connect to mongo server!');
	console.log(err);
});
// пример подключения к MongoDB
// mongodb://username:password@host:port/myDataBase
mongoose.connect('mongodb://localhost:27017/test');