angular
    .module('ngTest')
    .controller('MainController', function ($scope, peopleFactory) {
        
        $scope.people;
        
        peopleFactory.getPeople().then(function(data) {
            $scope.people = data.data;
        }, function(error){
            console.log(error);
        });
    });