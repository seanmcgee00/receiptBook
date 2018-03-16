(function() {

    var InboxController =  function($http,$cookies,$state) {

    var vm = this;
    vm.user=$cookies.get("username");
    getIndox();
    vm.showMessage= function(email_id){

      $http.get("http://localhost:5000/showMessage?messageid="+email_id)
      .then(function(result) {
        var data=result.data[0];
        console.log(result.data[0]);
        vm.message_body=data.message_body;
        vm.send_date=data.send_date;
        vm.sent_from=data.sent_from;
        vm.sent_to=data.sent_to;
        vm.subject=data.subject;
         getIndox();
      });
    }

    function getIndox(){
    $http.get("http://localhost:5000/getInbox?username="+vm.user)
    .then(function(result) {
      vm.emails=result.data;
    });
  }




    vm.replyMessage=function(){
    var postData={sent_to:vm.email_to,sent_from:vm.email_from,subject:vm.email_subject,message_body:vm.email_body};
    console.log( JSON.stringify(postData));
      $http({
              method: 'POST',
              url: 'http://localhost:5000/send',
              data: JSON.stringify(postData),
              headers: {'Accept': 'application/json, text/plain, */*','Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function (results) {



              }, function (e) {
                  console.log(e);
              });







};





  };


    angular.module('bankingApp').controller('inboxController', ['$http','$cookies','$state',InboxController]);
}());
