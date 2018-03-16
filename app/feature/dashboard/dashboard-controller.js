(function() {

    var DashboardController =  function($http,$cookies,$state,loginService) {

    var vm = this;
    vm.myLogin=function(){
      var postData={inputEmail:vm.inputEmail,inputPassword:vm.inputPassword};
      loginService.login(postData).then(function (results) {
      console.log("loginService function called in dashboard");

                  if(results.loggedIN=="valid")
                  {
                    $cookies.put('username',results.username);
                    $cookies.put('login',results.loggedIN);
                    console.log($cookies.get('username'));
                  //  $state.go("account");
                  }
                  else {
                    vm.checklogin=results.message;
                  }


              }, function (e) {
                  console.log(e);
              });

    }


  };



    angular.module('receiptBookApp').controller('dashboardController', ['$http','$cookies','$state','loginService',DashboardController]);
}());
