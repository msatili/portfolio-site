(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.about', {
      url: '/about',
      templateUrl: 'src/public/about/about.html',
      controller: 'AboutController',
      controllerAs: 'aboutCtrl'
      // resolve: {
      //   menuCategories: ['MenuService', function (MenuService) {
      //     return MenuService.getCategories();
      //   }]
      // }
    })
    .state('public.contact', {
      url: '/contact',
      templateUrl: 'src/public/contact/contact.html',
      controller: 'ContactController',
      controllerAs: 'contactCtrl'
      // resolve: {
      //   menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
      //     return MenuService.getMenuItems($stateParams.category);
      //   }]
      // }
    })
    .state('public.portfolio', {
      url: '/portfolio',
      templateUrl: 'src/public/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: 'portfolioCtrl'
    });
}
})();
