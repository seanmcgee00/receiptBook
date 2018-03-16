"use strict";

(function () {

    angular.module('receiptBookApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("inbox", {
                url: "/inbox",
                templateUrl: "app/feature/inbox/inbox.html"
        })

    });
}());
