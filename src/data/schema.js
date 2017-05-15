import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';
// импортируем queries и mutations из папки user
import UserQueries from './user/queries'
import UserMutations from './user/mutations'
// создадим GraphQL схему и заполним параметрами
// каждый параметр может содержать только один GraphQLObjectType
export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',      // произвольное имя для API библитеки
		fields: UserQueries // поля из файла queries.js
	}),
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: UserMutations
	})
});