Lists = new Mongo.Collection('lists');
ShoppingLists = new Mongo.Collection('shoppingLists');
Userss = new Mongo.Collection('users');
SharedLists = new Mongo.Collection('sharedLists');
Countries = new Mongo.Collection('countries');
Games = new Mongo.Collection('games');
TomerUsers = new Mongo.Collection('tomerUsers');
Bets = new Mongo.Collection('bets');


if (Meteor.isServer) {
	Meteor.startup(function() {
		// Countries.remove();

		// countriesArray = [
		// 	"Albania",
		// 	"France",
		// 	"Romania",
		// 	"Switzerland",
		// 	"England",
		// 	"Russia",
		// 	"Slovakia",
		// 	"Wales",
		// 	"Germany",
		// 	"Northern Ireland",
		// 	"Poland",
		// 	"Ukraine",
		// 	"Croatia",
		// 	"Czech Republic",
		// 	"Spain",
		// 	"Turkey",
		// 	"Belgium",
		// 	"Italy",
		// 	"Republic of Ireland",
		// 	"Sweden",
		// 	"Austria",
		// 	"Hungary",
		// 	"Iceland",
		// 	"Portugal"
		// ]

		// imagesNames = [
		// 	"Albania.png",
		// 	"France.png",
		// 	"Romania.png",
		// 	"Switzerland.png",
		// 	"England.png",
		// 	"Russia.png",
		// 	"Slovakia.png",
		// 	"Wales.png",
		// 	"Germany.png",
		// 	"NIreland.png",
		// 	"Poland.png",
		// 	"Ukraine.png",
		// 	"Croatia.png",
		// 	"Czech.png",
		// 	"Spain.png",
		// 	"Turkey.png",
		// 	"Belgium.png",
		// 	"Italy.png",
		// 	"Republic of Ireland.png",
		// 	"Sweden.png",
		// 	"Austria.png",
		// 	"Hungary.png",
		// 	"Iceland.png",
		// 	"Portugal.png"
		// ]

		// for (var i = 0; i < 24; i++) {
		// 	Countries.insert ({
		// 		"name": countriesArray[i],
		// 		"image": imagesNames[i]
		// 	});
		// };
	});
}