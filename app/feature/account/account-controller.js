(function() {

    var AccountController =  function($http,$cookies,$state,$scope,accountService) {

    var vm = this;
    $scope.$emit('account', 'on account page');
    vm.showAccount=false;
    vm.viewAccount=function(description,currency,balance,id,number){
        vm.accountDescription=description;
        vm.accountBalance=balance+" "+currency;
        vm.showAccount=true;

        accountService.getPayments(id).then(function (results) {
            console.log(results);
            vm.payments=results.data.transfers;
                }, function (e) {
                    console.log(e);
                });
    };

    vm.setPayment=function(payment){
      vm.payment=payment;
    };

    accountService.getCustomer().then(function (results) {
        console.log(results.data);
        vm.customer=results.data.firstName+" "+results.data.surname;
            }, function (e) {
                console.log(e);
            });

   accountService.getAccounts().then(function (results) {
        console.log(results);
        vm.accounts=results.data.accounts;

           }, function (e) {
               console.log(e);
           });




  };
    angular.module('receiptBookApp').controller('accountController', ['$http','$cookies','$state','$scope','accountService',AccountController]);
}());
