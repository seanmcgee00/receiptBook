(function() {

    var DashboardController =  function($http,$cookies,$state) {

    var vm = this;
    vm.myLogin=function(){
      var postData={inputEmail:vm.inputEmail,inputPassword:vm.inputPassword};

                        $http({
                                method: 'POST',
                                url: 'http://localhost:5000/login',
                                data: JSON.stringify(postData),
                                headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/x-www-form-urlencoded'}
                            }).then(function (results) {

                                    if(results.data.loggedIN=="valid")
                                    {
                                      $cookies.put('username',results.data.username);
                                      $cookies.put('login',results.data.loggedIN);
                                      console.log($cookies.get('username'));
                                    //  $state.go("account");
                                    }
                                    else {
                                      vm.checklogin=results.data.message;
                                    }


                                }, function (e) {
                                    console.log(e);
                                });


    }


  };



    angular.module('receiptBookApp').controller('dashboardController', ['$http','$cookies','$state',DashboardController]);
}());
