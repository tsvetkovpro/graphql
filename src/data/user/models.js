import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';
import mongoose from 'mongoose';
// схема коллекции
const schema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	}
});
// определяем коллекцию User и подключаем к ней схему
export let UserModel = mongoose.model('User', schema);
// тип для queries
export let UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	}
});
// тип для mutations
export let UserInput = new GraphQLInputObjectType({
	name: "UserInput",
	fields: {
		firstName: {
			type: GraphQLString
		},
		lastName: {
			type: GraphQLString
		}
	}
});