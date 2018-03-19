"use strict";

(function () {

    angular.module('receiptBookApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        }).state("about", {
                url: "/about",
                templateUrl: "app/feature/about/about.html"
        })

    });
}());
