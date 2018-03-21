"use strict";

(function () {


    function LoginService (loginDal,$cookies,$state) {

        this.checkforlogin = function()
        {
          console.log("checking the login function");
          console.log($cookies.get('loggedIN'));
          if(!$cookies.get('loggedIN'))
          {
            $state.go("dashboard");
          }
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

    angular.module("receiptBookApp").service("loginService", ["loginDal",'$cookies','$state',LoginService]);

}());
