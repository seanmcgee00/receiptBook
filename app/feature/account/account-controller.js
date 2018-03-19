(function() {

    var AccountController =  function($http,$cookies,$state,$scope,accountService) {

    var vm = this;
  
    $scope.$emit('account', 'on account page');
    vm.showAccount=false;
    vm.viewAccount=function(account){getAccountInfo(account)};


    vm.setPayment=function(payment){
      console.log(payment);
      vm.payment=payment;
    };

    accountService.getCustomer().then(function (results) {
      //  console.log(results.data);
        vm.customer=results.data.firstName+" "+results.data.surname;
            }, function (e) {
                console.log(e);
            });

   accountService.getAccounts().then(function (results) {
      //  console.log(results);
        vm.accounts=results.data.accounts;
        vm.accountONE=vm.accounts[0];
        getAccountInfo(vm.accountONE);

      //  console.log(vm.accounts[0]);

           }, function (e) {
               console.log(e);
           });


  function getAccountInfo(account){
    console.log(account);
               var accountAlias="";
               if(account.alias)
               {accountAlias=account.alias;}
               vm.accountDescription=account.description;
               vm.accountDetails=account.number+" "+account.type+" "+accountAlias;
               vm.accountBalance=account.balance+" "+account.currency;
               vm.showAccount=true;
               vm.accountID=account.id;
               console.log("the account id is "+vm.accountID);

               accountService.getPayments(account.id).then(function (results) {
                  // console.log(results);
                   vm.payments=results.data.transfers;
                       }, function (e) {
                           console.log(e);
                       });
           };




  };
    angular.module('receiptBookApp').controller('accountController', ['$http','$cookies','$state','$scope','accountService',AccountController]);
}());
