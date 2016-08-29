var bot = angular.module("botApp",[]);		//création d'un nouveau module
var toto = angular.module("botApp");		//récupération du module botApp qui a déjà été crée

bot.controller("botController", function($scope){
	$scope.hello = "Hello";
});


bot.controller("dictionnaryCtrl", function($scope){
	$scope.sentences = [{
		word: "Le gras",
		response: "c'est la vie"
		},
		{word: "Je suis victime",
		response: "des colifichets"},
		{word: "Au revoir",
		response: "Bienvenue"},
		{word: "Allô",
		response: "A l'huile"}];
});

bot.controller("suppressCtrl", function($scope){
	$scope.sendClick = function(p){
		var index = $scope.sentences.indexOf(p);
		$scope.sentences.splice(index, 1);
	};
});

