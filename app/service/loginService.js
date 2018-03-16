"use strict";

(function () {


    function LoginService (loginDal) {

        this.checkforlogin = function()
        {
        	;
        };


        this.logout = function()
        {

        };
        this.login = function(postData)
        {
        	console.log("LoginService Login function");
        	return loginDal.login(postData);
        };

    }

    angular.module("receiptBookApp").service("loginService", ["loginDal",LoginService]);

}());
