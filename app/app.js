'use strict';
var app = angular.module('myPortfolio', ['ui.router', 'angular-jwt']);

app.config(function ($stateProvider, $httpProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('main', {

            url: '/',
            views: {
                nav: {
                    templateUrl: 'site/partials/common/nav.html',
                    controller: 'MainCtrl as ctrl'
                },
                content: {
                    templateUrl: 'site/partials/main.content.html',
                    controller: 'MainCtrl as ctrl'
                },
                footer: {
                    templateUrl: 'site/partials/common/footer.html',
                    controller: 'MainCtrl as ctrl'
                }
            }
        })
})