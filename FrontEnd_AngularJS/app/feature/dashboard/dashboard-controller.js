(function() {

    var DashboardController =  function($http,$cookies,$state,loginService,$scope) {

    var vm = this;
    vm.myLogin=function(){
      var postData={inputEmail:vm.inputEmail,inputPassword:vm.inputPassword};


      loginService.login(postData).then(function (results) {
      console.log(results);

                  if(results.loggedIN=="valid")
                  {
                    $cookies.put('username',results.username);
                    $cookies.put('login',results.loggedIN);
                    console.log($cookies.get('username'));
                     $scope.$emit('login', 'complete');
                     $state.go("account");
                  }
                  else {

                    vm.checklogin=results.outputMessage;
                  }


              }, function (e) {
                  console.log(e);
              });

    }


  };



    angular.module('receiptBookApp').controller('dashboardController', ['$http','$cookies','$state','loginService','$scope',DashboardController]);
}());
