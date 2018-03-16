"use strict";

(function () {

    function LoginDal (dal, $log) {

        this.login = function (postData) {
        	$log.log("LoginDal  info: "+postData);
            return dal.http.POST("http://localhost:5000/login", postData);
        };

    }

    angular.module("receiptBookApp").service("loginDal", ["dal","$log", LoginDal]);
}());
