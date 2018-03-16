(function() {

    var IndexController =  function($http,$cookies,$state) {

    var vm = this;
    vm.login=false;
    checkforlogin();





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

    angular.module('receiptBookApp').controller('indexController', ['$http','$cookies','$state',IndexController]);
}());
