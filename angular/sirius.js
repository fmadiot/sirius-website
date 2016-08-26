(function () {
	'use strict';
	var app = angular.module('sirius', []);
	app.controller('main', ['$rootScope', function ($rootScope) {
		
		$rootScope.$on('$includeContentLoaded', function() {
		    $('.cloak').removeClass('cloak');
		});
		
		$rootScope.date = new Date();
		$rootScope.popupTooltip = false;
	}]);
})();