angular.module('FacturitoOne', [])
  .controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.services = [];
    
    $scope.icons = {
      'unregistered-user': 'fa-user',
      'registered-user': 'fa-key',
      'print': 'fa-print',
      'download': 'fa-cloud-download',
      'query': 'fa-clock-o',
      'help': 'fa-question-circle'
    };
    
    $scope.search = {
      'name': ''
    };
    
    $http.get('data/services.json')
      .then(function(response) { $scope.services = response.data; });
  }]);