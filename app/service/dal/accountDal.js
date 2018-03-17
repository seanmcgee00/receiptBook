"use strict";

(function () {

    function AccountDal (dal, $log) {

        this.getCustomer=function(){
          return dal.http.GET("http://localhost:5000/customer");
        };


        this.getAccounts = function () {
        	$log.log("AccountDal  getAccounts" );
            return dal.http.GET("http://localhost:5000/account");
        };

        this.getPayments = function (id) {
        	$log.log("AccountDal  getPayments" );
            return dal.http.GET("http://localhost:5000/payments?id="+id);
        };

    }

    angular.module("receiptBookApp").service("accountDal", ["dal","$log", AccountDal]);
}());
