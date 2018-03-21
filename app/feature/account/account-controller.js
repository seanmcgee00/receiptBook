(function() {

    var AccountController =  function($http,$cookies,$state,$scope,accountService,translateService,transactionService,loginService) {

    var vm = this;
  //  loginService.checkforlogin();
    $scope.$emit('account', 'on account page');

    vm.showAccount=false;
    vm.viewAccount=function(account){getAccountInfo(account)};

    $scope.$on('receiptItemsAuto', function(event, data) {
      vm.receiptItems=data;
       vm.buttonControl=true;
        vm.showReceiptItem=true;
     });

     vm.buttonControl=false;
     vm.setPayment=function(payment){
            console.log(payment);
            vm.payment=payment;
          //  vm.receiptItems=null;
            document.getElementById('imageresult').innerHTML = "";
            transactionService.getImage(vm.payment.id).then(function (result){
              //console.log(result);
              if(result!="not found")
                         {
                           var output = "<img id='receiptImage' src='data:image/png;base64,"+result+"' >";
                           document.getElementById('imageresult').innerHTML = output;
                           vm.buttonControl=true;

                         }
                         else {
                            vm.buttonControl=false;
                         }

          });

            transactionService.getReceiptItems(vm.payment.id).then(function (result){
              if(result!="not found")
              { vm.showReceiptItem=true;
                vm.receiptItems=result;
                console.log(vm.receiptItems);
              }
              else
              { vm.showReceiptItem=false;}

          });

            console.log("the buttonControl is"+vm.buttonControl);

    };

    vm.deleteReceipt=function(){
          vm.buttonControl=transactionService.deleteReceipt(vm.payment.id);
           vm.buttonControl=false;
            vm.showReceiptItem=false;
            vm.receiptItems=null;
    };

    accountService.getCustomer().then(function (results) {
      //  console.log(results.data);
        $scope.$emit('customer', results.data);
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
                   console.log(results);
                   vm.payments=results.data.transfers;
                   translateService.googleTranslateElementInit();
                       }, function (e) {
                           console.log(e);
                       });
           };




  };
    angular.module('receiptBookApp').controller('accountController', ['$http','$cookies','$state','$scope','accountService','translateService','transactionService','loginService',AccountController]);
}());
