"use strict";

(function () {


    function AccountService (accountDal,$log) {

        this.getCustomer=function(){
          $log.log("AccountService getCustoemr");
        	return accountDal.getCustomer();
        };

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };

        this.getPayments = function(id)
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getPayments(id);
        };


    }









    angular.module("receiptBookApp").service("accountService", ['accountDal','$log', AccountService]);

}());
