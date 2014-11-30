/**
 * Created by jrawal on 11/25/2014.
 */
(function () {
    //create angular module with dependency on ngRoute
    var jit = angular.module("jit", ['ngRoute']);

    //configure the routes using routeprovider
    jit.config(function ($routeProvider) {
        $routeProvider.when("/customers", {
            templateUrl: "partials/customers.html",
            controller: "ctrl"
        }).when("/findcustomer", {
            templateUrl: "partials/findcustomer.html",
            controller: "findctrl"
        }).when("/email", {
            templateUrl: "partials/email.html",
            controller: "emailctrl"
        })
            .otherwise({
                templateUrl: "partials/welcome.html"
            });
    });

    var emailctrl = jit.controller("emailctrl", function ($scope) {

        $scope.email = function () {
            alert("Emailing customer");
        }
    });

    var findctrl = jit.controller("findctrl", function ($scope) {

            $scope.find = function () {
                alert("Finding Customer");
            }

        }
    );

    var ctrl = jit.controller("ctrl", function ($scope) {

        $scope.show = function () {
            alert("Show all customers");
        }

    })

})();