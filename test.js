angular.module("app", ['ngRoute'])

  .factory('Todos', [function () {
    return [
      { title: 'Learn Javascript', completed: true, note: 'Add note...' },
      { title: 'Learn Angular.js', completed: false, note: 'Add note...' },
      { title: 'Love this tutorial', completed: true, note: 'Add note...' },
      { title: 'Learn Javascript design patterns', completed: false, note: 'Add note...' },
      { title: 'Build Node.js backend', completed: false, note: 'Add note...' },
    ];
  }])

  .controller('TodoCtrl', ['$scope', 'Todos', function ($scope, Todos) {
     $scope.todos = Todos;
  }])

  .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
    $scope.todo = Todos[$routeParams.id];
  }])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/todos.html',
        controller: 'TodoCtrl'
      })

      .when('/:id', {
        templateUrl: '/todoDetails.html',
        controller: 'TodoDetailCtrl'
      })
  }])