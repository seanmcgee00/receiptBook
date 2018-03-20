(function() {

    var IndexController =  function($http,$cookies,$state,$scope) {

    var vm = this;
    vm.login=false;
    vm.intro=true;


    $scope.$on('login', function(event, data) {
       checkforlogin();
     });
     $scope.$on('account', function(event, data) {
       vm.intro=false;
      });


    function checkforlogin()
    {
      if($cookies.get('login')=="valid")
      {vm.login=true;
       vm.user=$cookies.get('username');
      }
      else{vm.login=false;}
    };

    vm.logout=function(){
    console.log("logout");
    $cookies.remove('login');
    $cookies.remove('username');
    $state.go("dashboard");
    vm.login=false;
    };

  




  };

    angular.module('receiptBookApp').controller('indexController', ['$http','$cookies','$state','$scope',IndexController]);
}());
