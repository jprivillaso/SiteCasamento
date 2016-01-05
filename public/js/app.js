var app = angular.module("WeddingApp", ["ngRoute", "ngAnimate", "ngAudio"]);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: '/templates/home.html' 
    })
    .when('/home', { 
      controller: 'HomeController', 
      templateUrl: '/templates/home.html' 
    })
    .when('/about', { 
      controller: 'AboutController', 
      templateUrl: '/templates/about.html' 
    })
    .when('/messages', { 
      controller: 'MessagesController', 
      templateUrl: '/templates/messages.html' 
    })
    .when('/rsvp', { 
      controller: 'RsvpController', 
      templateUrl: '/templates/rsvp.html' 
    })
    .when('/ceremony', { 
      controller: 'CeremonyController', 
      templateUrl: '/templates/ceremony.html' 
    })
    .when('/bestman', { 
      controller: 'BestmanController', 
      templateUrl: '/templates/bestman.html' 
    })
    .when('/squires', { 
      controller: 'SquiresController', 
      templateUrl: '/templates/squires.html' 
    })
    .when('/dress', { 
      controller: 'DressController', 
      templateUrl: '/templates/dress.html' 
    })
    .when('/gifts', { 
      controller: 'GiftsController', 
      templateUrl: '/templates/gifts.html' 
    })
    .when('/hashtag', { 
      controller: 'HashtagController', 
      templateUrl: '/templates/hashtag.html' 
    })
    .when('/album', { 
      controller: 'AlbumController', 
      templateUrl: '/templates/album.html' 
    })
    .otherwise({ 
      redirectTo: '/'
    }); 
});