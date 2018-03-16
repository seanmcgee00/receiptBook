"use strict";

(function () {

    function AccountDal (dal, $log) {



        this.saveAccount = function (accountToSave) {
        	$log.log("AccountDal  saveAccount called "+accountToSave);
            return dal.http.POST("http://localhost:5000/login", accountToSave);
        };

    }

    angular.module("receiptBookApp").service("accountDal", ["dal","$log", AccountDal]);
}());
