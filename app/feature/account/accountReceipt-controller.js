(function() {

    var AccountReceiptController =  function($http,$cookies,$state,$scope) {

    var vm = this;


      vm.handleFiles = function(e){
          var ctx = document.getElementById('canvas').getContext('2d');
          var img = new Image;
          img.src = URL.createObjectURL(e.target.files[0]);
          img.onload = function() {
        //  ctx.drawImage(img, 20,20);
          vm.make_base2(img);
        }
      }

      vm.make_base2 =function(img1){
      console.log("make_base2 Created");
      var str;
      var img = new Image();
      img = img1;
      var canvas = document.createElement('canvas'), context = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);
      vm.str = canvas.toDataURL('image/png');
      console.log("HERE");
      }

      var input = document.getElementById('input');
      input.addEventListener('change', vm.handleFiles);

      vm.uploadReceipt=function(){
        console.log('inside the upload function');
        $http({
          method: "post",
          url: "http://localhost:5000/uploadReceipt",
          headers: {
          "Accept": "application/json, text/plain, ",
          "Content-Type": "text/plain"
          },
          data:vm.str
          }).then(function (result){
      console.log(result);
      console.log(result.data);
        if(result.data=="successful upload"){
        document.getElementById('resulting').innerHTML = "Fantastic";
        }
        });
      }


  };



    angular.module('receiptBookApp').controller('accountReceiptController', ['$http','$cookies','$state','$scope',AccountReceiptController]);
}());
