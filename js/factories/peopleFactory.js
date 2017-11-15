angular
    .module('ngTest')
    .factory('peopleFactory', function($http){
 
        function getPeople(){
            return $http.get('data/data.json');
        }

        return {
            getPeople: getPeople
        } 
    });