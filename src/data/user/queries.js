import {
	GraphQLID,
	GraphQLList,
	GraphQLNonNull
} from 'graphql';
// импортируем данные из models.js
import {UserModel, UserType, UserInput} from './models';
// создаем поле для получения одного пользователя
const User = {
	type: UserType,  // тип для получения данных пользователя
	args: {
		// аргумент для поиска пользователь
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	// метод, в котором формируется запрос и возвращаются данные
	resolve (root, params, options) {
		return UserModel
			.findById(params.id)
			.exec();  // возвращаем JSON
	}
};
const Users = {
	type: new GraphQLList(UserType),
	args: {},
	resolve (root, params, options) {
		return UserModel
			.find()
			.exec();
	}
};
export default {
	User: User,
	Users: Users,
}